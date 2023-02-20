import './home.css'

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <section className="section pokedex">
                <div className="section__info section__info--pokedex">
                    <h2>Pokedex</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="section__img-container section__img-container--pokedex">
                    <img className="section__img" src="assets/pokedex.png" alt="Pokedex" />
                </div>
            </section>

            <section className="section pokemon">
                <div className="section__img-container section__img-container--pokemon">
                    <img className="section__img" src="assets/pokemon.png" alt="Pokemon" />
                </div>
                <div className="section__info section__info--pokemon">
                    <h2>Pokemon</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>

            <section className="section section-play">
                <div className="section__info section__info--play">
                    <h2>Play</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="section__img-container section__img-container--play">
                    <img className="section__img" src="assets/play.png" alt="Play" />
                </div>
            </section>
        </div>
    )
}

export default Home;