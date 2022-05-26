import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/LogIn/SignUp";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Products from "./pages/Home/Products/Products";
import RequireAuth from "./pages/LogIn/RequireAuth";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
