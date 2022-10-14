import React from 'react';
import CocktailCard from './CocktailCard';

function CocktailList({ cocktails, onDeleteCocktail }) {
  return (
    <div className='cocktailcards'>
        {cocktails.map((cocktail) => {
            return (
                <CocktailCard
                key = {cocktail.id}
                cocktail ={cocktail}
                onDeleteCocktail = {onDeleteCocktail}
                />
            );
        })}
    </div>
  );
}

export default CocktailList