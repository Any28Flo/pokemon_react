import {
    START_GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILED,
    START_GET_POKEMON_DETAIL,
    GET_POKEMON_DETAIL_SUCCESS,
    GET_POKEMON_DETAIL_FAILED
} from "../types/pokemonTypes";

const initialState ={
    loading:false,
    error: null,
    list : []
};
const pokemonReducer = (state = initialState, action) => {
    switch(action.type){
        case START_GET_POKEMON_DETAIL:
        case START_GET_POKEMON:
            return{
                ...state,
                loading: true
            }
        case GET_POKEMON_DETAIL_SUCCESS:    
        case GET_POKEMON_SUCCESS:
            return{
                ...state,
                loading: true,
                list: action.payload
            }
        case GET_POKEMON_DETAIL_FAILED:
        case GET_POKEMON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
                
        default:
            return state;
    }
}

export default pokemonReducer;

