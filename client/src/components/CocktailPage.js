import React, {useEffect, useState } from 'react';
import NewCocktail from './NewCocktail';
import CocktailList from './CocktailList';

function CocktailPage() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("/cocktails")
        .then ((r) => r.json())
        .then((cocktailsArray) => {
            setCocktails(cocktailsArray)
            console.log(cocktailsArray)
        });
    }, []);

    function handleAddCocktail(newCocktail){
    const updatedCocktailArray = [newCocktail, ...cocktails]
    setCocktails(updatedCocktailArray)
  }

    function handleDeleteCocktail(id){
        const updatedCocktailArray = cocktails.filter((cocktail) => cocktail.id !== id);
        setCocktails(updatedCocktailArray)
    }
  return (
    <div>
         <NewCocktail onAddCocktail={handleAddCocktail}/>
         <CocktailList
         cocktails={cocktails}
         onDeleteCocktail ={handleDeleteCocktail}
         />
    </div>
  )
}

export default CocktailPage