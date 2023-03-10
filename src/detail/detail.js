import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './detail.css'

import CanvasJSReact from '../canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Detail() {
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


    const id = useParams().id;
    const [pokemon, setPokemon] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => cargarPokemon(), []);

    function cargarPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((response) => response.json())  
        .then((pokemonData) => {
            setPokemon(pokemonData);
            setIsLoading(false)
        });
    }

    function withDecimal(number) {
        return number / 10;
    }

    if(isLoading) {
        return <h3>cargando...</h3>
    } else {
        const defaultPoints = pokemon.stats.map( (stat, index) => {
            return { label: stat.stat.name, y: stat.base_stat }
        })

        const options = {
            title: {
                text: "Base points"
            },
            data: [{				
                    type: "column",
                    dataPoints: defaultPoints
            }]
        }

        return (
            <div className="detalle">
                <div className='header--detalle'>
                    <h1>
                        <span className='detalle__nombre'>{pokemon.name}</span>&nbsp;
                        <span className="detalle__id">N.?? {pokemon.id}</span>
                    </h1>
                </div>
                <div className='detalle__main'>
                    <div className='detalle__main__first-column'>
                        <div className='detalle__main__first-column__img-container'>
                            <img className='detalle__main__img' src={pokemon.sprites.other.home.front_default} />
                        </div>
                    </div>
                    <div className='detalle__main__second-column'>
                        <div className='detalle__main__physical-characteristics'>
                            <div className='detalle__main__weight'>
                                <p className='detalle__main__physical-characteristics__title'>Peso:</p>
                                <p>{withDecimal(pokemon.weight)} kg</p>
                            </div>
                            <div className='detalle__main__height'>
                                <p className='detalle__main__physical-characteristics__title'>Altura:</p>
                                <p>{withDecimal(pokemon.height)} m</p>
                            </div>
                            <div className='detalle__main__abilities'>
                                <p className='detalle__main__physical-characteristics__title'>Habilidades:</p>
                                {
                                    pokemon.abilities.map( (ability, index) => <p key={index}>{ability.ability.name}</p>)
                                }
                            </div>
                        </div>

                        <div className='detalle__main__types'>
                            <h3>Tipo:</h3>
                            {
                                pokemon.types.map( (type, index) => <span className={`list-item__type ${typeClass[type.type.name]}`} key={index}>{type.type.name}</span>)
                            }
                        </div>
                    </div>
                </div>
            <div className='detail-chart'>
                <CanvasJSChart options = {options}
                    /* onRef = {ref => this.chart = ref} */
                />
            </div>
                <Link to="/pokedex">
                    <button className='boton'>Ir a la Pokedex</button>
                </Link>
            </div>
        );

    }
}

export default Detail;