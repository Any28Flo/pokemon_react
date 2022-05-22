import React from 'react';
import Item from "../Item";
import arrayImages from '../../helpers/arrayImages';

const List = ({items}) => {
    return (
        <div>
            {
                items?.map((item,index) =>(
                    <Item data={item} img={arrayImages[index]}/>
                ))
            }
        </div>
    );
};

export default List;