import { useState, useEffect } from 'react';
import ListItem from '../listItem/listItem';
import './listado.css';

function Listado() {

  const [listaPokemos, setListaPokemons] = useState([])
  const [urlPokeApi, setUrlPokeApi] = useState("https://pokeapi.co/api/v2/pokemon?limit=8")

  useEffect( () => cargaTodos(), []);

  function cargaTodos() {
    fetch(urlPokeApi)
    .then((response) => response.json())  
    .then((datosApi) => {
      console.log(datosApi);
      setListaPokemons(listaPokemos.concat(datosApi.results));
      setUrlPokeApi(datosApi.next)
    });
  }

  function cargaMas() {
    cargaTodos()
  }

  return <>
    <div className='listado'>
      {
        listaPokemos.map( (pokemon, index) => <ListItem key={index} url={pokemon.url} />)
      }
    </div>

    <button className='boton' onClick={cargaMas}>Cargar mas</button>
  </>;
}

export default Listado;