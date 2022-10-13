import React, { useEffect, useState} from 'react';
import AddCockTail from './AddCockTail';
import CockTailList from './CockTailList';

function CocktailPage() {
    const [cockTails, setCockTails] = useState([]);

    useEffect(() => {
        fetch('/cocktails')
        .then((r) => r.json())
        .then ((cockTailsArray) => {
            console.log(cockTailsArray)
        });
    }, []);

    function handleAddCocktail(newCocktail) {
        const updatedCockTailsArray = [newCocktail, ...cockTails]
        setCockTails(updatedCockTailsArray)
    }

    function handleDeleteCocktail(id){
        const updatedCockTailsArray = cockTails.filter((cockTail) => cockTail.id !==id);
        setCockTails(updatedCockTailsArray);
    }
  return (
    <div>
        <AddCockTail onAddCocktail={handleAddCocktail}/>
        <CockTailList
        cockTails ={cockTails}
        onDeleteCocktail ={handleDeleteCocktail}
        />
    </div>
  )
}

export default CocktailPage