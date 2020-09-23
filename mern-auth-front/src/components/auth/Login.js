import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../misc/ErrorNotice";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
try {
    const loginUser = { email, password };

    const loginRes = await Axios.post(
      "http://localhost:5000/users/login",
      loginUser
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  }catch(err){
    err.response.data.msg && setError(err.response.data.msg);
  }
  };
  return (
    <div className="page">
      <h2>Login</h2>
      {error && (
        <ErrorNotice msg={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
