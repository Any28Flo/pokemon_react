class pokeApi {
  constructor() {
    this.endpointURL = `${process.env.REACT_APP_API_URL}`;
  }
  async getPokemon() {
    try {

      let response = await fetch(`${this.endpointURL}/pokemon?limit=20`, {
        method: "GET",
      });

      return await response.json();

    } catch (e) {
        
      console.log(e);
    }
  }
  async getDetailPokemon(pokemonUrl) {
    try {
      let response = await fetch(`${this.endpointURL}/pokemon/${pokemonUrl}`, {
        method: "GET",
      });

      return await response.json();

    } catch (e) {

      console.log(e);
    }
  }
}

const pokeAPI = new pokeApi();

export default pokeAPI;
