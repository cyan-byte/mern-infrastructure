import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {/* If NavBar outside of the ternary expression, it will only show up if the expression is true */}
      {/* <NavBar />  */}
      {user ? (
        // If you want to syle a fragment "tag", you must turn it into a div (or different element) because they cannot be styled.
        <>
        {/* If NavBar is inside the ternary expression, it will show up only if there is a user */}
        <NavBar/>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage/>
      )}
    </main>
  );
}

export default App;
