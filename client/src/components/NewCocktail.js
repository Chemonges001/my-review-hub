import React, { useState } from 'react'

function NewCocktail({onAddCocktail}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState (" ")
    const [description, setDescription] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
    
        fetch("/cocktails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            image,
            description,
          
          }),
        })
        .then((r) => r.json())
        .then(newCocktail => {
          onAddCocktail(newCocktail)
          setName("")
          setImage("")
          setDescription("")
        })
      }

  return (
    <div className='addcocktail'>
        <h4>Tell Us About The Cocktail</h4>
        <form onSubmit={handleSubmit} >
            <input
              type="text"
              name ="name"
              placeholder="Cocktail name"
              value ={name}
              onChange={(e) => setName(e.target.value)}
            />
            {" "}
             <input
              type="text"
              name ="image"
              placeholder="Leave Review"
              value ={image}
              onChange={(e) => setImage(e.target.value)}
            />
            {" "}
             <input
              type="text"
              name ="description"
              placeholder="Leave Review"
              value ={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {" "}
        <button type="submit">Add Cocktail</button>

        </form>
    </div>
  )
}

export default NewCocktail