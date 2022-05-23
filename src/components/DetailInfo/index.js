import React from 'react';

const DetailInfo = ({actualPokemon}) => {
    return (
        <div className="pokemon-detail">
            <div className="detail_wrapper image screen gray">
                <img className="pokemon-info_image"
                     src={actualPokemon.sprites.front_default}
                     alt={"pokemon-detail_image"}
                />
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
    );
};

export default DetailInfo;