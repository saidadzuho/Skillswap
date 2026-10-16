import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // kasnije ovdje ide poziv prema backendu (axios)
    navigate("/home");
  };

  return (
    <div className="app">
      <h2 className="logo center">SkillSwap</h2>
      <h1>Dobrodošao/la nazad</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <input className="input" type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Lozinka"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="row">
          <label><input type="checkbox" /> Zapamti me</label>
          <span className="muted">Zaboravila si lozinku?</span>
        </div>

        <button className="btn btn-primary" type="submit">Prijavi se</button>
      </form>

      <p className="muted center">ili</p>
      <button className="btn btn-outline">Prijavi se putem Googlea</button>
      <button className="btn btn-outline">Prijavi se putem Facebooka</button>

      <p className="small center">
        Nemaš račun? <Link to="/register" className="link">Registruj se</Link>
      </p>
    </div>
  );
}

export default Login;