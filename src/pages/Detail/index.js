import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pokemon} from "../../redux/actions";
import { useParams } from "react-router-dom";
import arrayImages from "../../helpers/arrayImages";

const Detail = () => {
    const dispatch = useDispatch();
     let { idPokemon } = useParams();
    let image = arrayImages[idPokemon - 1];

    const {actualPokemon} = useSelector(state => state.pokemon);

    useEffect(()=>{
        dispatch(pokemon.getPokemonDetail(idPokemon));
    }, [dispatch, idPokemon])

    return (
        <div className="pokemon-detail">
            <h2>Detail</h2>
            <div className="detail_image_wrapper">
                <img className="pokemon-info_image" alt={"pokemon-detail_image"} src={require(`../../${image.src}`)}/>
            </div>
            <div className="detail_info">
                <h2>{actualPokemon?.name}</h2>
                <p>Height: {actualPokemon?.height}</p>
                <p>Weight: {actualPokemon?.weight}</p>
                <h3>Abilities</h3>
                <ul>
                    {
                        actualPokemon?.abilities.map((ability, index) =>{
                            return(
                                <li key={`ability-${index}`}>{ability?.ability?.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Detail;