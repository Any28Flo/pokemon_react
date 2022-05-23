class pokeApi {
  constructor() {
    this.endpointURL = `https://pokeapi.co/api/v2`;
  }
  async getPokemon() {
    try {

      let response = await fetch(`${this.endpointURL}/pokemon?limit=150&offset=0`, {
        method: "GET",
      });

      let json = await response.json();

  return await Promise.all(json.results.map(async item => {

    let response = await fetch(item.url)
    return await response.json()
  }))


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
