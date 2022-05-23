import {
    START_GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILED,
    START_GET_POKEMON_DETAIL,
    GET_POKEMON_DETAIL_SUCCESS,
    GET_POKEMON_DETAIL_FAILED, START_SEARCH_POKEMON, SEARCH_POKEMON_SUCCESS
} from "../types/pokemonTypes";

const initialState ={
    loading:false,
    error: null,
    list : [],
    actualPokemon: null
};
const pokemonReducer = (state = initialState, action) => {
    switch(action.type){
        case START_GET_POKEMON_DETAIL:
        case START_GET_POKEMON:
        case START_SEARCH_POKEMON:
            return{
                ...state,
                loading: true
            }
        case GET_POKEMON_SUCCESS:
            return{
                ...state,
                loading: false,
                list: action.payload
            }
        case GET_POKEMON_DETAIL_FAILED:
        case GET_POKEMON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_POKEMON_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                actualPokemon: action.payload
            }
        case SEARCH_POKEMON_SUCCESS:

            return{
                ...state,
                list: state.list.filter(pokemon =>{
                   if(pokemon.name.includes(action.payload)){
                       return pokemon
                   }
                })
            }
        default:
            return state;
    }
}

export default pokemonReducer;

