var pokemonData;
const fetch = require("node-fetch");
fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(function (res) {
        return res.json();
    }).then(function (json) {
        pokemonData = json;
        // console.log(pokemonData.pokemon[0])
        
        pokemonInfo("Bulbasaur");
        console.log("Pokemon with next evolution as venusaur")
        evolution("Venusaur");
        console.log("Pokemon with weakness fire:")
        weakness("Fire");
    }).catch(function () {
        console.log("It was not possible to fetch the data.")
});

let pokemonInfo = function(name){

    for (let pokemon in pokemonData.pokemon)
    {   
        if (pokemonData.pokemon[pokemon].name==name)
        {
        console.log(pokemonData.pokemon[pokemon]);
        }
    }
}

let evolution = function(name){

    for (let pokemon in pokemonData.pokemon)
    {   
        for( let nextEvolution in pokemonData.pokemon[pokemon].next_evolution)
        {
            if (pokemonData.pokemon[pokemon].next_evolution[nextEvolution].name==name)
            {
                console.log(pokemonData.pokemon[pokemon].name);
            }
        }
        
    }
}

const weakness = function(weak_name){

    for (let pokemon in pokemonData.pokemon)
    {   
        for( let nextEvolution in pokemonData.pokemon[pokemon].weaknesses)
        {
            if (pokemonData.pokemon[pokemon].weaknesses[nextEvolution]==weak_name)
            {
                console.log(pokemonData.pokemon[pokemon].name);
            }
        }
        
    }
}