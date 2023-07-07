import React, { useEffect, useState } from "react";
import PokemonCard from "../components/pokemonCard";
import Navbar from "../components/Navbar";
import { Container, Grid, Skeleton } from "@mui/material";
import axios from "axios";
import { Skeletons } from "../components/skeletons/Skeletons";
import { Footer } from "../components/footer/footer";


export const Home = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [] )

    const getPokemons = () => {
        var endpoints = []
        for(var i = 1; i <= 48; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))

    }

    const pokemonFilter = (name) => {
        var filterPokemons = []
        if(name === ""){
            getPokemons()
        }
        for( var i in pokemons) {
            if( pokemons[i].data.name.includes(name)){
                filterPokemons.push(pokemons[i])
            }
        }
        setPokemons(filterPokemons)
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />

            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? ( 
                        <Skeletons/>
                    ) : (
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                            <PokemonCard name={ pokemon.data.name } image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid>
                        ))  
                    )}
                </Grid>
            </Container>

            <Footer/>
        </div>
    )
}