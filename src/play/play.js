import { useEffect, useState } from 'react';
import './play.css';

function Play() {
    const id = Math.floor(Math.random() * 500) + 1;
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [tryName, setTryName] = useState([]);
    const [isCorrect, setIsCorrect] = useState();

    useEffect( () => {
        cargarPokemon()
    }, []);

    function cargarPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((response) => response.json())  
        .then((pokemonData) => {
            setPokemon(pokemonData);
            setIsLoading(false);
            setTryName(initializeTryName(pokemonData.name));
        });
    }

    function initializeTryName(name) {
        const array = name.split('').map( (letter, index) => '');
        return array;
    }


    function check(e) {
        const inputLetter = e.target.value;
        const index = e.target.getAttribute('indice');
        const newTryName = tryName.map( (letter, i) => {
            if(i === parseInt(index)) {
                return inputLetter
            } else {
                if(letter !== '') {
                    return letter
                }
                return ''
            }
        })

        setTryName(newTryName);
    }

    function navigation(e) {
        if(e.target.nextElementSibling && e.key !== 'Backspace' && e.key !== 'Enter') {
            e.target.nextElementSibling.focus();
        }

        if(e.target.previousElementSibling && e.key === 'Backspace') {
            e.target.previousElementSibling.focus();
        }
    }

    function endGame(e) {
        if(e.key === 'Enter'){
            const tryNameString = tryName.join('');
            if(tryNameString === pokemon.name) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
            }
        }

        navigation(e);
    }

    function newGame() {
        cargarPokemon();
        setIsCorrect(false);
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
                        pokemon.name.split('').map( (letter ,index) => <input className='input-play' type='text' maxLength="1" key={index} indice={index} onChange={check} onKeyUp={endGame} />)
                    }
                </div>
                {
                    isCorrect && <h3>Correcto</h3>
                }
            </div>
            <button className='boton' onClick={newGame}>New Game</button>
        </div>
    )
}

export default Play
