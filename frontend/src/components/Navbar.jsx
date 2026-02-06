import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Pages where title should be hidden
  const hideTitle =
    location.pathname === "/login" ||
    location.pathname === "/register";

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div style={styles.navbar}>
      {/* Center Title */}
      {!hideTitle && <h2 style={styles.title}>Dashboard</h2>}

      {/* Right Side */}
      <div style={styles.rightIcons}>
        {user ? (
        <>
          <Link to="/cart" style={styles.icon}>🛒</Link>
          <Link to="/profile" style={styles.icon}>👤</Link>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </>
      ) : (
        !isAuthPage && (
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        )
      )}
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
    justifyContent: "flex-end",
    padding: "0 20px",
    position: "sticky",
    top: 0,
  },
  title: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    margin: 0,
  },
  rightIcons: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  icon: {
    fontSize: "22px",
    textDecoration: "none",
    color: "white",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "6px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  loginLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
