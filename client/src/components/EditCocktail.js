import React, { useState } from 'react'

function EditCocktail({ cocktail, onEditCocktail }) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    function handleEditCocktail(e) {
        e.preventDefault();
        fetch (`/cocktails/${cocktail.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                newName: name,
                newImage: image,
                newDescription: description
              }),
        })

        .then((r) => r.json())
        .then(updatedCocktail => {
            onEditCocktail(updatedCocktail)
        })
    }
  return (
    <div>
        <form onSubmit={handleEditCocktail} >
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
              placeholder="Image"
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
        <button type="submit">Edit Cocktail</button>
        </form>
    </div>
  )
}

export default EditCocktail