import React, { Component } from 'react'
import styles from './stylesheets.module.css'

class Pokemoncard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: {}
        }
    }
    async componentDidMount() {
        const { link } = this.props;
        const url = link;
        const res = await fetch(url);
        const pokemons = await res.json();
        this.setState({
            pokemon: pokemons
        })
    }
    render() {
        const { name } = this.props;
        const { pokemon } = this.state
        return (
            <div className={styles.pokemon}>
                <div className={styles.imgcontainer}>
                    <img src={pokemon.sprites&&pokemon.sprites.front_default} alt={name} />
                </div>
                <div className={styles.info}>
                    <span className={styles.number}>{pokemon.id}</span>
                    <h3 className={styles.name}>{name}</h3>
                    <small class="type">Type: <span>{pokemon.types&&pokemon.types[0]&&pokemon.types[0].type&&pokemon.types[0].type.name }</span></small>
                </div>

            </div>
        )
    }
}

export default Pokemoncard
