import './detail.css'

function Detail(props) {
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

    function goToPokedex() {
        props.setIsDetail(false);
    }

    return (
        <div className="detalle">
            <div className='header--detalle'>
                <h1>
                    <span className='detalle__nombre'>{props.pokemon.name}</span>&nbsp;
                    <span className="detalle__id">N.º {props.pokemon.id}</span>
                </h1>
            </div>
            <div className='detalle__main'>
                <div className='detalle__main__first-column'>
                    <div className='detalle__main__first-column__img-container'>
                        <img className='detalle__main__first-column__img-container__img' src={props.pokemon.sprites.front_default} />
                    </div>
                </div>
                <div className='detalle__main__second-column'>
                    <div className='detalle__main__physical-characteristics'>
                        <div className='detalle__main__weight'>
                            <p className='detalle__main__physical-characteristics__title'>Peso:</p>
                            <p>{props.pokemon.weight} kg</p>
                        </div>
                        <div className='detalle__main__height'>
                            <p className='detalle__main__physical-characteristics__title'>Altura:</p>
                            <p>{props.pokemon.height} m</p>
                        </div>
                        <div className='detalle__main__abilities'>
                            <p className='detalle__main__physical-characteristics__title'>Habilidades:</p>
                            {
                                props.pokemon.abilities.map( (ability, index) => <p key={index}>{ability.ability.name}</p>)
                            }
                        </div>
                    </div>

                    <div className='detalle__main__types'>
                        <h3>Tipo:</h3>
                        {
                            props.pokemon.types.map( (type, index) => <span className={`list-item__type ${typeClass[type.type.name]}`} key={index}>{type.type.name}</span>)
                        }
                    </div>
                </div>
            </div>
            <button className='boton' onClick={goToPokedex}>Ir a la Pokedex</button>
        </div>
    );
}

export default Detail;