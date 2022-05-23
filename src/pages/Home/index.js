import React, {useEffect} from 'react';
import List from "../../components/List";
import {useDispatch, useSelector} from "react-redux";
import {pokemon} from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    const {list} = useSelector(state => state.pokemon);

    useEffect(()=>{
        dispatch(pokemon.getPokemonAction());
    }, [dispatch])

    return (
        <div>
            <List items={list}/>
        </div>
    );
};

export default Home;