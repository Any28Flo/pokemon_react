class pokeApi{
    constructor() {
        this.endpointURL = `https://pokeapi.co/api/v2`;
    
    }
    async getPokemon(){
        try {
            let response = await fetch(`${this.endpointURL}/pokemon?limit=20`, {
                method: "GET"
            });

          
            return await response.json();
        

        }catch (e) {
            console.log(e)
        }
    }
}

const pokeAPI = new pokeApi();

export default pokeAPI;