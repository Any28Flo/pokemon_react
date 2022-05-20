import React from 'react';

const Item = ({data}) => {
    return (
       <li>{data?.name}</li>
    );
};

export default Item;