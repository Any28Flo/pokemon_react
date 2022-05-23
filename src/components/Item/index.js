import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {pokemon} from "../../redux/actions";

import "./index.css";

const Item = ({data, img, index}) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleClick = (pokemonUrl, id) => {
        dispatch(pokemon.getPokemonDetail(pokemonUrl));
        navigate(`/${id + 1}`);
    };
    return (
        <div className='pokemon-info'>
            <div className='pokemon-info_image_wrapper'>
                <img className="pokemon-info_image" alt={data?.img} src={require(`../../${img.src}`)}/>
            </div>
            <div className='pokemon-info_description'>
                <h3>{data.name}</h3>
                <button onClick={() => handleClick(data?.url, index)}>See details</button>
            </div>
        </div>
    );
};

export default Item;