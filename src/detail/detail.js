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

    return (
        <div className="detalle">
            <h1>{props.pokemon.name}</h1>
            <div className="detalle__img-container">
                <img className="detalle__img" src={props.pokemon.sprites.front_default} />
            </div>
            <div className="detalle__info">
                <p className="detalle__info__id">#{props.pokemon.id}</p>
                <h2 className="detalle__info__name">{props.pokemon.name}</h2>
                <div className="detalle__info__types">
                    {
                        props.pokemon.types.map( (type, index) => <span className={`detalle__info__types__type ${typeClass[type.type.name]}`} key={index}>{type.type.name}</span>)
                    }
                </div>
            </div>
            <div className="detalle__info__stats">
                <div className="detalle__info__stats__stat">
                    <p className="detalle__info__stats__stat__name">HP</p>
                    <p className="detalle__info__stats__stat__value">{props.pokemon.stats[0].base_stat}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;