import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
// import { Routes, Route } from "react-router-dom";
// import NewCocktail from './components/NewCocktail';
import CocktailPage from './components/CocktailPage';

function App() {
  const [user, setUser] = useState(null);
  // const [cocktails, setCocktails] = useState([]);

  // useEffect(() => {
  //   fetch("/cocktails")
  //   .then((r) => r.json())
  //   .then((cocktailsArray) => {
  //     setCocktails(cocktailsArray);
  //     console.log(cocktailsArray)
  //   });
  // }, [])

  // useEffect(() => {
  //   fetch("/cocktails/")
  //   .then(r => r.json())
  //   .then(cocktails => setCocktails(cocktails))
  // }, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // function handleAddCocktail(newCocktail){
  //   const updatedCocktailArray = [newCocktail, ...cocktails]
  //   setCocktails(updatedCocktailArray)
  // }
  // function handleAddCocktail(newCocktail) {
  //   setCocktails([...cocktails, newCocktail])
  // }

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        {/* <NewCocktail user={user} onAddCocktail={handleAddCocktail}/> */}
        <CocktailPage/>
      </main>
    </div>
  )
}

export default App