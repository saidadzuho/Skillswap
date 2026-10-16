import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="app center">
      <h2 className="logo">SkillSwap</h2>

      <div style={{ marginTop: "auto" }}>
        <h1>Nauči nešto novo. Podijeli ono što znaš.</h1>
        <p className="muted" style={{ marginTop: 12 }}>
          Razmjenjuj znanje sa drugim korisnicima i zarađuj kredite podučavajući druge.
        </p>
      </div>

      <Link to="/register" className="btn btn-primary">Pronađi vještinu →</Link>
      <Link to="/register" className="btn btn-secondary">Ponudi svoju vještinu</Link>
      <p className="small">
        Već imaš račun? <Link to="/login" className="link">Prijavi se</Link>
      </p>
    </div>
  );
}

export default Welcome;