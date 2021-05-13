import React from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktails';


const CocktailList = ({ cocktails }) => (
    <ul aria-label="cocktails">
        {cocktails.map((drink) => (
            <li key={drink.id}>
                <Cocktail name={drink.name} image={drink.image} craft={drink.craft} />
            </li>
        ))}
    </ul>
);

CocktailList.propTypes = {
    cocktails: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        craft: PropTypes.string.isRequired,
    }))
};

export default CocktailList;