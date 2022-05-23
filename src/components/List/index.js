import React from 'react';
import Item from "../Item";
import arrayImages from '../../helpers/arrayImages';

const List = ({items}) => {
    return (
        <div className='container'>
            {
                items?.map((item,index) =>(
                    <Item key={`pokemon-${index}`} data={item} img={arrayImages[index]} index={index}/>
                ))
            }
        </div>
    );
};

export default List;