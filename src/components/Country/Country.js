import React from 'react';
import './Country.css'

const Country = (props) => {
    const {region, area, population, name, flags} = props.country
    return (
        <div className='country'>
            <h2>This is country Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p>region: {region}</p>
        </div>
    );
};

export default Country;