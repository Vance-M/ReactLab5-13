import React from 'react';
import PropTypes from 'prop-types';

const Cocktail = ({ name, image, craft }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>
            {name} - {craft}
        </figcaption>
    </figure>
);

Cocktail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    craft: PropTypes.string.isRequired,
};

export default Cocktail;