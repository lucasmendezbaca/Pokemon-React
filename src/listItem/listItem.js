import { useState, useEffect } from 'react';
import './listItem.css'

function ListItem(props) {

    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => cargarPokemon(), []);

    function cargarPokemon() {
        fetch(props.url)
        .then((response) => response.json())  
        .then((pokemonData) => {
            console.log(pokemonData.sprites.front_default);
            setPokemon(pokemonData);
            setIsLoading(false)
        });
    }

    if(isLoading) {
        return <h3>cargando...</h3>
    }

    return (
        <div className='list-item'>
            <img src={pokemon.sprites.front_default} />
            <h2>{pokemon.name}</h2>
        </div>
    )
}

export default ListItem;