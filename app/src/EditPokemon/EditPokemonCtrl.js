'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, $routeParams, PokemonsService) {


    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemonData = response.data;
        $scope.pokemonLoaded = true;
    });

    $scope.editPokemon = function() {

        $scope.editSuccess = false;

        PokemonsService.editPokemon($scope.pokemonData).then(function() {

            $scope.editSuccess = true;

        });

    }

});
