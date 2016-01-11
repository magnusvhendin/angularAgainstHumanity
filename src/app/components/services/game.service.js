/*global Firebase:false moment:false */

(function () {
    'use strict';
    
    angular
    .module('services.game', [])
    .service('gameService', GameService);
    
    function Game (_deck, _creator) {
        this.currentQuestion = _deck.qCards.shift();
        this.deck = {
            usedAnswerCards: [],
            unusedAnswerCards: _deck.aCards,
            questionCards: _deck.qCards
        };
        this.answers = [];
        this.currentPlayer = _creator;
        this.id = 1; // Need to set real IDs
        this.latest = moment().format('YYYY-MM-DD HH:mm');
        this.playTo = 7;
        this.playerCount = 1;
        this.playerMax = 10;
        this.players = [_creator];
        this.started = moment().format('YYYY-MM-DD HH:mm');
        this.status = 'setup';
        /*  Statuses:
            'setup': Game just started, awaiting players
            'playing': Game has started
            'selecting': Players selecting answer cards
            'choosing': Tsar choosing best answer
        */
        this.timeLimit = 0;
        this.active = true;
    }
    
    function Player (_name) {
        this.name = _name;
        this.cardsOnHand = [];
        this.id = 0;
        this.points = 0;
        this.wonCards = [];
    };

    /** @ngInject */
    function GameService($q, deckService, $log, nullCheck) {
        var baseUrl = 'https://shining-inferno-6102.firebaseio.com/';
        var gameUrl = baseUrl + 'games/';
        
        var service = {
            newGame: function (_creator, _id) {
                var deferred = $q.defer();
                
                service.checkIfIdExist(_id).then(function (idExist) {
                    $log.debug('idExist: ', idExist);
                    if (idExist) {
                        deferred.reject(false, 'id');
                    } else {
                        deckService.getDeck().then(function (deck) {
                            deck.shuffle();
                            var game = new Game(deck, _creator);
                            
                            var gameRef = new Firebase(gameUrl + _id)
                                gamesRef.set(game, function (error) {
                                    if (error) {
                                        deferred.reject(false, error);
                                    } else {
                                        deferred.resolve(true, game);
                                    }
                                });
                            
                            deferred.resolve(true, game);
                        });
                    }
                });
                
                return deferred.promise;
            },
            newPlayer: function (name) {
                return new Player(name);
            },
            checkIfIdExist: function (requestedId) {
                var def = $q.defer();
                
                var gameRef = new Firebase(gameUrl + requestedId);
                
                gameRef.once('value', function (snapshot) { 
                    var existingGame = snapshot.val();
                    
                    def.resolve(!nullCheck(existingGame));
                });
                
                return def.promise;
            }
        };
        
        return service;
    }
})();