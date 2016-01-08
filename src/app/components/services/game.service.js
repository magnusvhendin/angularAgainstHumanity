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
        this.latest = moment('yyyy-MM-dd HH:mm');
        this.playTo = 7;
        this.playerCount = 1;
        this.playerMax = 7;
        this.players = [_creator];
        this.started = moment('yyyy-MM-dd HH:mm');
        this.status = 'starting';
        this.timeLimit = 0;
    }

    /** @ngInject */
    function GameService($q, deckService) {
        return {
            newGame: function (_creator) {
                var deferred = $q.defer();
                
                deckService.getDeck().then(function (deck) {
                    var game = new Game(deck, _creator);
                    
                    deferred.resolve(game);
                });
                
                return deferred.promise;
            }
        }
    }
})();