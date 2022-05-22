const Item = ({data, img}) => {
    return (
        <div className='pokemon-info'>
            <div className='pokemon-info_image_wrapper'>
                <img alt={data?.img} src={require(`../../${img.src}`)} />
            </div>
            <div className='pokemon-info_info'>
                <h3>{data.name}</h3>
                <button>See details</button>
            </div>
        </div>
    );
};

export default Item;