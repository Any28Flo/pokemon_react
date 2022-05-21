import pokeAPI from "../../helpers/pokeApi";
import {
  START_GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
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
          payload: response.results,
        });
      } catch (error) {
        dispatch({
          type: GET_POKEMON_FAILED,
          payload: error,
        });
      }
    };
  },
};
export default pokemonActions;
