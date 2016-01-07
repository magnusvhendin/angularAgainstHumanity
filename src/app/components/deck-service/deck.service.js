/*global Firebase:false */

(function () {
    'use strict';
    
     angular
    .module('services', [])
    .service('deckService', DeckService);
    
    function Deck (deck) {
        this.qCards = deck.qCards.map(function (card) {
            card.text = card.text.replace('<br>', '\n');
            return card;
        });
        this.aCards = deck.aCards.map(function (card) {
            card.selected = false;
            card.selectedIndex = undefined;
            card.text = card.text.replace('<br>', '\n');
            return card;
        });
        
        this.shuffle = function () {
            this.aCards = _internalShuffle(this.aCards);
            this.qCards = _internalShuffle(this.qCards);
        };
        
        // Shuffle function
        var _internalShuffle = function (cards) {
            var currentIndex = cards.length, temporaryValue, randomIndex ;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = cards[currentIndex];
                cards[currentIndex] = cards[randomIndex];
                cards[randomIndex] = temporaryValue;
            }
            return cards;
        };
    }

    /** @ngInject */
    function DeckService($q) {
        return {
            getDeck: function () {
                
                var deferred = $q.defer();
                
                var deckRef = new Firebase('https://shining-inferno-6102.firebaseio.com');
                    
                deckRef.on('value', function (snapshot) {
                    var deck = new Deck(snapshot.val());
                    deferred.resolve(deck);
                });
                
                return deferred.promise;
            }
        }
    }
})();