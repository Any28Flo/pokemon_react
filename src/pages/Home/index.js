import React, {useEffect} from 'react';
import List from "../../components/List";
import {useDispatch, useSelector} from "react-redux";
import {pokemon} from "../../redux/actions";
import SearchBar from "../../components/SearchBar";

const Home = () => {
    const dispatch = useDispatch();

    const {list} = useSelector(state => state.pokemon);

    useEffect(()=>{
        dispatch(pokemon.getPokemonAction());
    }, [dispatch])

    return (
        <div>
            <SearchBar/>
            <List items={list}/>
        </div>
    );
};

export default Home;