import React, { Component } from 'react'
import Pokemoncard from './Pokemoncard'
class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemons: []
        }
    }

    async componentDidMount() {
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const res = await fetch(url);
        const pokemons = await res.json();
        this.setState({
            pokemons: pokemons['results']
        })
    }

    render() {
        const { pokemons } = this.state;
        return (
            <>
                {pokemons && pokemons.length && pokemons.map(pokemon => <Pokemoncard key={pokemon.name} name={pokemon.name} link={pokemon.url} />)}
            </>

        )
    }
}

export default Main
