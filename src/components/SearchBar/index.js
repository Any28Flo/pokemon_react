import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {pokemon} from "../../redux/actions";
import "./styles.css";
const SearchBar = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) =>{
        setText(e.target.value)
        dispatch(pokemon.searchPokemon(text));
    }

    return (
        <div className="search-bar">
            <input type="text"
                    value={text}
                   placeholder="Search your favorite pokemon"
                   onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;