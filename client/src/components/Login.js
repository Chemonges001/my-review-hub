import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
        <h2>The Cocktail Hub</h2>
        {showLogin ? (
        <>
        <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  )
}

export default Login