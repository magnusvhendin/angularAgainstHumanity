/*global Firebase:false */

(function () {
    'use strict';
    
     angular
    .module('services.deck', [])
    .service('deckService', DeckService);
    
    function Deck (answers, questions) {
        this.qCards = questions.map(function (card) {
            card.text = card.text.replace('<br>', '\n');
            return card;
        });
        this.aCards = answers.map(function (card) {
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
        var baseUrl = 'https://shining-inferno-6102.firebaseio.com/';
        
        return {
            getDeck: function () {
                
                var deferred = $q.defer();
                
                var answersRef = new Firebase(baseUrl + 'aCards');
                var questionsRef = new Firebase(baseUrl + 'qCards');
                
                
                answersRef.once('value', function (aSnapshot) {                    
                    questionsRef.once('value', function (qSnapshot) {                        
                        var deck = new Deck(aSnapshot.val(), qSnapshot.val());
                        
                        deferred.resolve(deck);
                    });
                });
                
                return deferred.promise;
            }
        }
    }
})();