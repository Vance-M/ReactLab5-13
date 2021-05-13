import React, { Component } from 'react'
import CocktailList from '../components/cocktails/CocktailsList';
import Controls from '../components/cocktails/Controls';
import { fetchCocktailByName, fetchCocktails } from '../services/CocktailApi';

export default class CocktailsContainer extends Component {
    state = {
        loading: true,
        cocktails: [],
    }

    async componentDidMount() {
        const drinks = await fetchCocktails();
        this.setState({
            loading: false,
            cocktails: drinks,
        });
    }

    handleCocktailNameChange = ({target}) => {
        this.setState({ cocktailName: target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, })
        const drinks = await fetchCocktailByName(this.state.cocktailName);
        this.setState({
            loading: false,
            cocktails: drinks,
        })
    }


    render() {
        const { loading, cocktails, cocktailName } = this.state;

        if (loading) return <h1>Loading...</h1>;

        return (
            <div>
                <Controls cocktailName={cocktailName} onCocktailNameChange={this.handleCocktailNameChange} onSubmit={this.handleSubmit} />
                <CocktailList cocktails={cocktails} />
            </div>
        )
    }
}
