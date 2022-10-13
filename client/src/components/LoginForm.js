import React, {useState} from 'react'

function LoginForm({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        user_name:userName, 
        password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          autoComplete="off"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

      </div>

      <div>
        <label>Password</label>
        <input
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      <div>
        <button type='submit'>{isLoading ? "Loading..." : "Login"}</button>
      </div>

      <div>
      {errors.map((err) => (
          <h3 key={err}>{err}</h3>
        ))}
      </div>

    </form>
  )
}

export default LoginForm;