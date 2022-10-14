import React from 'react'

function CocktailCard({cocktail, onDeleteCocktail}) {
    const { id, name, image, description } = cocktail;

    function handleDeleteCocktail(){
        fetch(`/cocktails/${id}`,{
            method: "DELETE",
        }).then((r) => {
            if (r.ok){
                onDeleteCocktail(id)
            }
        })
    }
  return (
    <div className='card'>
        <img className='figure' src={image} alt ={name}/>
        <h2>{name}</h2>
        <p>{description}</p>

        <button onClick={handleDeleteCocktail}>Delete</button>
    </div>
  )
}

export default CocktailCard