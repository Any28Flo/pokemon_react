import pokeAPI from "../../helpers/pokeApi";
import {
  START_GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  START_GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILED,
  SEARCH_POKEMON_SUCCESS,
} from "../types/pokemonTypes";

const pokemonActions = {
  getPokemonAction: (args) => {
    return async (dispatch) => {
      dispatch({
        type: START_GET_POKEMON,
      });
      try {
        const response = await pokeAPI.getPokemon();
        dispatch({
          type: GET_POKEMON_SUCCESS,
          payload: response,
        });
      } catch (error) {
        dispatch({
          type: GET_POKEMON_FAILED,
          payload: error,
        });
      }
    };
  },
  getPokemonDetail:(idPokemon) =>{
    return async (dispatch) => {
      dispatch({
        type: START_GET_POKEMON_DETAIL,
      });
      try {
        const response = await pokeAPI.getDetailPokemon(idPokemon);
        dispatch({
          type: GET_POKEMON_DETAIL_SUCCESS,
          payload: response
        });
      } catch (error) {
        dispatch({
          type: GET_POKEMON_DETAIL_FAILED,
          payload: error,
        });
      }
    };
  },
  searchPokemon: pokemon =>{
    return (dispatch) =>{

        dispatch({
          type: SEARCH_POKEMON_SUCCESS,
          payload: pokemon
        });

    }

  }
};
export default pokemonActions;
