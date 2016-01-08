/*global Firebase:false moment:false */

(function () {
    'use strict';
    
    angular
    .module('services.game', [])
    .service('gameService', GameService);
    
    function Game (_deck, _creator) {
        this.deck = _deck;
        this.answers = [];
        this.currentPlayer = undefined;
        this.currentQuestion = undefined;
        this.id = undefined;
        this.latest = moment().format('YYYY-MM-DD HH:mm');
        this.playTo = 7;
        this.playerCount = 1;
        this.playerMax = 10;
        this.players = [_creator];
        this.started = moment().format('YYYY-MM-DD HH:mm');
        this.status = 'started';
        this.timeLimit = 0;
    }
    
    function Player (_name) {
        this.name = _name;
        this.cardsOnHand = [];
        this.id = 0;
        this.points = 0;
        this.wonCards = [];
    };

    /** @ngInject */
    function GameService($q, deckService) {
        var gameUrl = 'https://shining-inferno-6102.firebaseio.com/games/';
        
        return {
            newGame: function (_creator, id) {
                var deferred = $q.defer();
                
                deckService.getDeck().then(function (deck) {
                    var game = new Game(deck, _creator);
                    
                    deferred.resolve(game);
                });
                
                return deferred.promise;
            },
            newPlayer: function (name) {
                return new Player(name);
            }
        }
    }
})();