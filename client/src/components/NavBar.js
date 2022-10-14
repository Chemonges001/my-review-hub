import React from 'react'

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='navbar'>
       <button><a href="#home">Home</a></button>
       <button><a href="#home">Cocktail</a></button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default NavBar