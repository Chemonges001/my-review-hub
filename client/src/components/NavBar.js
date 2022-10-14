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
       <button className='navbutton'><a href="#home">Home</a></button>
       <button className='navbutton'><a href="#home">Cocktail</a></button>
      <button className='navbutton' onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default NavBar