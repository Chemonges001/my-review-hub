import React from 'react';
import CockTailCard from './CockTailCard.Js';

function CocktailList({ cocktails, onDeleteCocktail }) {
  return (
    <ul>
        {cocktails.map((cocktail) => {
             return (
                <CockTailCard
                key= {cocktail.id}
                cocktail = {cocktail}
                onDeleteCocktail = {onDeleteCocktail}
                />
             )
        }
       
        )}
    </ul>
  
}

export default CocktailList