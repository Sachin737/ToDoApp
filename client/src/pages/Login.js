import React, { useState } from "react";
import ToggleMenu from "../components/ToggleMenu";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ToggleMenu/>
      <form className="login" onSubmit={submitHandler}>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Email:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
