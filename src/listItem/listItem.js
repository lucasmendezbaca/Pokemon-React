import { useState, useEffect } from 'react';
import Detail from '../detail/detail';
import './listItem.css'

function ListItem(props) {
    const typeClass = {
        grass: 'list-item__type--planta',
        poison: 'list-item__type--veneno',
        water: 'list-item__type--agua',
        fire: 'list-item__type--fuego',
        bug: 'list-item__type--bicho',
        flying: 'list-item__type--volador',
        poison: 'list-item__type--veneno',
        normal: 'list-item__type--normal',
        electric: 'list-item__type--electrico',
        ground: 'list-item__type--tierra',
        fairy: 'list-item__type--hada',
        fighting: 'list-item__type--lucha',
        psychic: 'list-item__type--psiquico',
        rock: 'list-item__type--roca',
        steel: 'list-item__type--acero',
        ice: 'list-item__type--hielo',
        ghost: 'list-item__type--fantasma',
        dragon: 'list-item__type--dragon',
        dark: 'list-item__type--siniestro'
    }

    const [pokemon, setPokemon] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [isDetail, setIsDetail] = useState(false);

    useEffect( () => cargarPokemon(), []);

    function cargarPokemon() {
        fetch(props.url)
        .then((response) => response.json())  
        .then((pokemonData) => {
            console.log(pokemonData)
            setPokemon(pokemonData);
            setIsLoading(false)
        });
    }

    if(isLoading) {
        return <h3>cargando...</h3>
    }

    if (isDetail) {
        return <Detail pokemon={pokemon} setIsDetail={setIsDetail} />
    }

    return (
        <div onClick={() => setIsDetail(true)} className='list-item'>
            <div className='list-item__img-container'>
                <img className='list-item__img' src={pokemon.sprites.front_default} />
            </div>
            <div>
                <p># {pokemon.id}</p>
                <h2>{pokemon.name}</h2>
                {
                    pokemon.types.map( (type, index) => <span className={`list-item__type ${typeClass[type.type.name]}`} key={index}>{type.type.name}</span>)
                }
            </div>
        </div>
    )
}

export default ListItem;