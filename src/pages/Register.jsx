import { useRef } from "react";
import './register.css'
function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleClick(e){
        e.preventDefault();
        const user = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        fetch("https://auth-rg69.onrender.com/api/auth/signup", {
            method: "POST",
            "Content-type": "application/json",
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
  return (
    <div className="container mt-5">
      <h3 className="text-center">Register page</h3>
      <form className="mx-auto">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            ref={usernameRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            ref={emailRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            ref={passwordRef}
          />
        </div>
        <button onClick={handleClick} className="btn">Save</button>
      </form>
    </div>
  );
}

export default Register;
