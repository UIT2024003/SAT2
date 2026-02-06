import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//import { useAuth } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const { user } = useAuth();
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/cart"
          element={user ? <Cart items={[]} /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;