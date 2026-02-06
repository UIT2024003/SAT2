import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email); // set auth state
    navigate("/"); // redirect to dashboard
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button style={styles.button}>Login</button>

        <p style={styles.footer}>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")} style={styles.link}>
                Register
            </span>
        </p>

      </form>

    </div>
    
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  form: {
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    background: "#7c7a9bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#7c7a9bff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;