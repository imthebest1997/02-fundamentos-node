import { http } from "../plugins";

export const getPokemonById = async( id: number ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    return pokemon.name;
    // return fetch(url)
    //     .then((response) => response.json())
    //     .then((pokemon) => pokemon.name)
    //     .catch((error) => console.log(error));
}
