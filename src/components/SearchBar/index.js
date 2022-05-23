import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {pokemon} from "../../redux/actions";

const SearchBar = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) =>{
        setText(e.target.value)
        dispatch(pokemon.searchPokemon(text));

    }

    return (
        <>
            <input type="text"
            value={text}
                   onChange={handleSearch}
            />
        </>
    );
};

export default SearchBar;