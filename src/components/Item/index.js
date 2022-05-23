import {createSearchParams, Link, useNavigate} from "react-router-dom";

import "./index.css";

const Item = ({data, img, index}) => {

    let navigate = useNavigate();

    return (
        <div className='pokemon-info'>
            <div className='pokemon-info_image_wrapper'>
                <img className="pokemon-info_image" alt={data?.img} src={require(`../../${img.src}`)}/>
            </div>
            <div className='pokemon-info_description'>
                <h3>{data.name}</h3>
                <Link to={`/${index + 1}`}>
                    <button >See details</button>

                </Link>
            </div>
        </div>
    );
};

export default Item;