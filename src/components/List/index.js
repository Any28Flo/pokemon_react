import React from 'react';
import Item from "../Item";

const List = ({items}) => {
    return (
        <ul>
            {
                items.map(item =>(
                    <Item data={item}/>
                ))
            }
        </ul>
    );
};

export default List;