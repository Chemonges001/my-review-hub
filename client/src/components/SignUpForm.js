import React, {useState} from 'react'


function SignUpForm({onLogin}) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    // eslint-disable-next-line
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
          name, 
          user_name: userName,
          password,
          password_confirmation: passwordConfirmation

        }),
    }). then((r) => {
      setIsLoading(false)
      if(r.ok){
        r.json().then((user) => onLogin(user))
      }
        else {
          r.json().then((err) => setErrors(err.errors));
        }
    });
  }
  return (
    <form className='formcomponent' onSubmit ={handleSubmit}>
      <div>
      <label className='inputlable'>Name</label>
      <input
       type="text"
       autoComplete="off"
       value={name}
       onChange={(e) => setName(e.target.value)}
      />

      </div>

      <div>
      <label className='inputlable'>Username</label>
      <input
       type="text"
       autoComplete="off"
       value={userName}
       onChange={(e) => setUserName(e.target.value)}
      />
      </div>
    
      <div>
      <label className='inputlable'>Password</label>
      <input
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       autoComplete="current-password"
      />
      </div>

      <div>
      <label className='inputlable'>Confirm Password</label>
      <input
       type="password"
       value={passwordConfirmation}
       onChange={(e) => setPasswordConfirmation(e.target.value)}
       autoComplete="current-password"
      />
      </div>
      <div>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </div>
      <div>
      {errors.map((err) => (
          <h3 key={err}>{err}</h3>
        ))}
      </div>

    </form>
  )
}

export default SignUpForm
