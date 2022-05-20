import { combineReducers } from 'redux';
import pokemonReducers from "./pokemonReducer";

export default combineReducers({
    pokemon : pokemonReducers
});