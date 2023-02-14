import { useEffect, useState } from 'react';
import './play.css';

function Play() {
    const id = Math.floor(Math.random() * 500) + 1;
    const [pokemon, setPokemon] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [tryName, setTryName] = useState([])

    useEffect( () => {
        cargarPokemon()
    }, []);

    function cargarPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((response) => response.json())  
        .then((pokemonData) => {
            console.log(pokemonData)
            setPokemon(pokemonData);
            setIsLoading(false)
        });
    }

    function initializeTryName() {
        const array = pokemon.name.split('').map( (letter, index) => '');
        console.log(array);
        setTryName(array)
    }


    function check(e) {
        if(tryName.length === 0) {
            initializeTryName()
        }

        const inputLetter = e.target.value;
        const index = e.target.getAttribute('indice');

        setTryName(tryName.map( (letter, i) => {
            if(i === index) {
                return inputLetter
            } else {
                return ''
            }
        }))

        console.log(tryName)
    }

    function isCorrect() {
    }

    if(isLoading) {
        return <h3>cargando...</h3>
    }

    return (
        <div>
            <h1>Play</h1>
            <div className='game-container'>
                <h3>{pokemon.name}</h3>
                <img className='img-play' src={pokemon.sprites.front_default} />
                <div className='input-play-container'>
                    {
                        // pokemon.name.split('').map( (letter, index) => <input className='input-play' type='text' key={index} />)
                        // capturar el evento de teclado de la tecla enter en cada input
                        pokemon.name.split('').map( (letter ,index) => <input className='input-play' type='text' key={index} indice={index} onChange={check} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Play








        // if(e.key === 'Enter'){
        //     console.log('You must have pressed Enter ')
        //     return
        // }