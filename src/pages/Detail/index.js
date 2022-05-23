import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pokemon} from "../../redux/actions";
import {useParams} from "react-router-dom";
import arrayImages from "../../helpers/arrayImages";
import "./index.css";
import Spinner from "../../components/Spinner";

const Detail = () => {
    const dispatch = useDispatch();
    let {idPokemon} = useParams();
    let image = arrayImages[idPokemon - 1];

    const {actualPokemon, loading} = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(pokemon.getPokemonDetail(idPokemon));
    }, [dispatch, idPokemon])

    return (

        <>
            {
                loading ? <Spinner/> :

                    <div className="pokemon-detail">
                        <div className="detail_wrapper image screen gray">
                            <img className="pokemon-info_image" alt={"pokemon-detail_image"}
                                 src={require(`../../${image.src}`)}/>
                        </div>
                        <div className="detail_wrapper info screen dark-gray">
                            <h2>{actualPokemon?.name}</h2>
                            <p><strong>Height:</strong> {actualPokemon?.height}</p>
                            <p><strong>Weight:</strong> {actualPokemon?.weight}</p>
                            <h3><strong>Abilities</strong></h3>
                            <ul>
                                {
                                    actualPokemon?.abilities.map((ability, index) => {
                                        return (
                                            <li key={`ability-${index}`}>{ability?.ability?.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

            }
        </>


    );
};

export default Detail;