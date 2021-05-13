import React from 'react';
import PropTypes from 'prop-types';


const Controls = ({ cocktailName, onCocktailNameChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="cocktail-name">Cocktail Name</label>
        <input
         type="cocktail-name"
         id="cocktail-name" 
         value={cocktailName}
         onChange={onCocktailNameChange}
        />
        <button aria-label="find-cocktail">Submit</button>
    </form>
);

Controls.propTypes = {
    cocktailName: PropTypes.string.isRequired,
    onCocktailNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Controls;
