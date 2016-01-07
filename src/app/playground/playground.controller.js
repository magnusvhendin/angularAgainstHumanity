(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('PlaygroundController', PlaygroundController);
    

  /** @ngInject */
  function PlaygroundController(deckService, $scope, $log) {
    var vm = this;

    var vars = {
        answNum: 10
    };
    
    vm.deck = {};
    vm.questionIndex = 0;
    vm.answerCards = [];
    vm.selectedCards = [];

    activate();

    vm.selectCard = function (card) {
        if (vm.selectedCards.indexOf(card) > -1) return;
        switch (vm.question.pick) {
            case 1:
                card.selected = true;
                if (angular.isDefined(vm.selectedCards[0])) vm.selectedCards[0].selected = false;
                vm.selectedCards[0] = card;
                break;
            default:
                for (var i = 0; i < vm.question.pick; i++) {
                    if (angular.isUndefined(vm.selectedCards[i])) {
                        card.selected = true;
                        if (angular.isDefined(vm.selectedCards[i])) vm.selectedCards[i].selected = false;
                        vm.selectedCards[i] = card;
                        return;
                    } 
                }
                break;
        }
    };

    vm.unselectCard = function (card) {
        if (angular.isUndefined(card)) return;
        var index = vm.selectedCards.indexOf(card);
        vm.selectedCards[index].selected = false;
        vm.selectedCards[index] = undefined;
    };
    
    vm.submitAnswer = function (question, answers) {
        $log.debug(question, answers);
    };

    function activate() {
        vm.shuffling = true;
        deckService.getDeck().then(function (deck) {
            vm.deck = deck;
            vm.deck.shuffle();
            
            setQuestion(vm.questionIndex);
            setAnswerCards();
            
            // Done setting up deck
            vm.shuffling = false;
        });
    }
    
    var setQuestion = function (index) {
        vm.question = vm.deck.qCards[index];
        vm.selectedCards = [];

        for (var i = vm.question.pick; i > 0; i--) {
            vm.selectedCards.push(undefined);
        }
    };
    var setAnswerCards = function () {
        for (var i = vars.answNum; i > 0; i--) {
            vm.answerCards.push(vm.deck.aCards.shift());
        }
    };
  }
})();
