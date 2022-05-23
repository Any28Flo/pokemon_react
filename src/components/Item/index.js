import { Link} from "react-router-dom";

import "./index.css";

const Item = ({data}) => {
    return (
        <div className='pokemon-info'>
            <div className='pokemon-info_image_wrapper'>
                <img className="pokemon-info_image" alt={data?.img}
                     src={data.sprites.front_default}
                     />
            </div>
            <div className='pokemon-info_description'>
                <h3>{data.name}</h3>
                <Link to={`/${data.id}`}>
                    <button >See details</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;