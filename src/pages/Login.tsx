import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const token = response.data.access_token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type='submit'>Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
