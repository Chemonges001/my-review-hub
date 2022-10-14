import React, { useState }from 'react'
import EditCocktail from './EditCocktail';

function CocktailCard({cocktail, onDeleteCocktail, onEditCocktail}) {
    const { id, name, image, description } = cocktail;
    const [editor, setEditor] = useState(false)

    function handleClick() {
        setEditor(!editor)
    }

    function getEditor() {
        if (editor)
        return <EditCocktail onEditCocktail={onEditCocktail} cocktail={cocktail} />
    }

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
        {" "}
        <button onClick={handleClick}>Edit</button>
        {getEditor()}
    </div>
  )
}

export default CocktailCard