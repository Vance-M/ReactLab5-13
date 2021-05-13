import React from 'react';
import { getAllByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CocktailsContainer from './CocktailsContainer';

describe('Cocktail container', () => {
    it('displays a list of cocktails', async() =>{
        render(<CocktailsContainer />)

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'cocktails' })
        expect(ul).not.toBeEmptyDOMElement();

    });

    it('returns cocktails by a filtered name', async () => {
        render(<CocktailsContainer />)

        const input = await screen.findByLabelText('Cocktail Name');
        userEvent.type(input, 'martini');

        const submitButton = await screen.findByRole('button', {name: 'find-cocktail'})
        userEvent.click(submitButton);

        return waitFor(() => {
            const drinks = screen.getAllByText('Martini', { exact: false });
            expect(drinks).toHaveLength(12);
        });
    });
});
