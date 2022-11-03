import React, { useEffect, useState } from 'react'

export default function TestApi() {

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(function (response) {
            return response.json();
        })
        .then(function (poke) {
            setPokemon(poke.results);
        })
    }, [])

    const [pokemon, setPokemon] = useState([])
    console.log(pokemon)




    return (
        <div>
            {pokemon.map((poke)=>{
                return<div key={poke.name}>
                            <h2>{poke.name}</h2>
                        </div>;
            })}
        </div>
    )
}
