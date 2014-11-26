'use strict';

describe('index controller', function() {
    var scope, createController;

    beforeEach(module('App'));

    // Setup variables
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            var params = {
                $scope: scope
            };

            return $controller('IndexController', params);
        };
    }));

    describe('increment', function() {
        beforeEach(function() {
            createController();
        });
        describe('on page load', function() {
            it('should be initialized to zero.', function() {
                expect(scope.theNumber).to.equal(0);
            });
            it('should now be 1', function() {
                scope.increment();
                expect(scope.theNumber).to.equal(1);
            })
        });
    });
});
