import { useState, useEffect } from 'react';

function Listado() {
    const [urlPokeApi, setUrlPokeApi] = useState("https://pokeapi.co/api/v2/pokemon?limit=8")
    const [listaPokemos, setListaPokemons] = useState([])
    const [detallesPokemons, setDetallesPokemons] = useState([])

    useEffect( () => cargaTodos(), []);

    function cargaTodos() {
        fetch(urlPokeApi)
            .then((response) => response.json())  
            .then((datosApi) => {
                console.log(datosApi);
                setListaPokemons(listaPokemos.concat(datosApi.results));
                setUrlPokeApi(datosApi.next)
                console.log(listaPokemos)
                // listaPokemos.forEach( (pokemon) => {
                //     fetch(pokemon.url)
                //         .then((response) => response.json())  
                //         .then((datosPokemon) => {
                //             setDetallesPokemons(detallesPokemons.concat(datosPokemon))
                //         });
                // })
            });
    }

    function cargaMas() {
        cargaTodos()
        // console.log(detallesPokemons)
    }

    return <>
        <ul>
        {
            listaPokemos.map( (pokemon, index) => <li key={index}>{pokemon.name}</li>)
        }

        <button onClick={cargaMas}>Cargar mas</button>
        </ul>
    </>;

}

export default Listado;