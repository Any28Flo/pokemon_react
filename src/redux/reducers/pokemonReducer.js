
const initialState ={
    loading:false,
    error: null,
    pokemon : []
};
const pokemonReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default pokemonReducer;

