import React from 'react'

function CockTailCard({cocktail, onDeleteCocktail}) {
    const {id, name, image,} = cocktail

    function handleDelete(){
        fetch(`/cocktails/${id}`,{
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteCocktail(id);
            }
        })
    }
  return (
    <div>
        <img src ={image} alt ={name}/>
        <h4>{name}</h4>
        <button onClick ={handleDelete}>Delete</button>
    </div>
  )
}

export default CockTailCard