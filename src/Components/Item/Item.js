import React from "react";
import { Link } from 'react-router-dom';



const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id} className='text-decotarion-none'>
        <div className='container'>
            <div className= 'card border border-0'>
                <img src={item.img} className='card-img-top' alt={item.nombre} />
                <div className='card-body text-center'>
                    <p children='card-title'>{item.nombre}</p>
                </div>
            </div>
        </div>
        </Link>
    );

}

export default Item;