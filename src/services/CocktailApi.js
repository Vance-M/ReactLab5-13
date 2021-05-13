
export const fetchCocktails = async() => {
    const res = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    const json = await (await res).json();

    return json.drinks.map(drink => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        craft: drink.strInstructions,
    }))
}

export const fetchCocktailByName = async(cocktailName) => {
    const res = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    const json = await (await res).json();

    return json.drinks.map(drink => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        craft: drink.strInstructions,
    }))
}