'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $q, PokemonsService, BerriesService) {

    $scope.Loaded = false;

    $q.all({
        pokemonResponse: PokemonsService.getPokemons(),
        berriesResponse: BerriesService.getBerries()
    }).then(function(values) {
        $scope.pokemons = values.pokemonResponse.data.results;
        $scope.berries = values.berriesResponse.data.results;
        $scope.Loaded = true;
    });

});
