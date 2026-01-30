import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/cart";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Dashboard />
            <Cart
              items={[
                { name: "Apple", price: 10 },
                { name: "Banana", price: 5 },
              ]}
            />
          </>
        }
      />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
