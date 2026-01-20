import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Dashboard />

      {/* Cart section */}
      <Cart
        items={[
          { name: "Apple", price: 10 },
          { name: "Banana", price: 5 },
        ]}
      />
    </div>
  );
}

export default App;
