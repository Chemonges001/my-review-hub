import { useState } from "react";

function AddCockTail({ onAddCocktail }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
      }),
    })
      .then((r) => r.json())
      .then((newCockTail) =>{onAddCocktail(newCockTail)

      setName("")
      setImage("")
      
  });
  }

  return (
    <div className="new-plant-form">
      <h2>New Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="cocktail name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Cocktail</button>
      </form>
    </div>
  );
}

export default AddCockTail;
