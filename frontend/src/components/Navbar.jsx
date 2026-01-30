import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      {/* Center Title */}
      <h2 style={styles.title}>Dashboard</h2>

      {/* Right Icons */}
      <div style={styles.rightIcons}>
        <Link to="/cart" style={styles.icon}>🛒</Link>
        <Link to="/profile" style={styles.icon}>👤</Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    background: "#7c7a9bff",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // push content right
    padding: "0 20px",
    position: "sticky",
    top: 0,
  },

  title: {
    position: "absolute",   // center independently
    left: "50%",
    transform: "translateX(-50%)",
    margin: 0,
  },

  rightIcons: {
    display: "flex",
    gap: "18px",
  },

  icon: {
    fontSize: "24px",
    textDecoration: "none",
    color: "white",
  },
};

export default Navbar;
