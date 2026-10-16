import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Lozinke se ne poklapaju");
      return;
    }
    // kasnije ovdje ide poziv prema backendu (axios)
    navigate("/home");
  };

  return (
    <div className="app">
      <h2 className="logo center">SkillSwap</h2>
      <h1>Kreiraj račun</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <input className="input" name="name" placeholder="Ime i prezime" onChange={handleChange} />
        <input className="input" name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input className="input" name="password" type="password" placeholder="Lozinka" onChange={handleChange} />
        <input className="input" name="confirm" type="password" placeholder="Potvrdi lozinku" onChange={handleChange} />
        <button className="btn btn-primary" type="submit">Registruj se</button>
      </form>

      <p className="small center">
        Već imaš račun? <Link to="/login" className="link">Prijavi se</Link>
      </p>
    </div>
  );
}

export default Register;