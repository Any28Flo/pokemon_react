import React, {useEffect} from 'react';

import {useParams} from "react-router-dom";
import "./index.css";
import Spinner from "../../components/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {pokemon} from "../../redux/actions";
import DetailInfo from "../../components/DetailInfo";

const Detail = () => {
    const dispatch = useDispatch();

    let {idPokemon} = useParams();


    const {actualPokemon,loading} = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(pokemon.getPokemonDetail(idPokemon));
    }, [dispatch, idPokemon])

    return (
        <div>
        {
            loading ? Spinner : <DetailInfo actualPokemon={actualPokemon}/>
        }
        </div>
);
};

export default Detail;