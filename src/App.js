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
import AddProduct from "./pages/AddProduct/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile";
import AddReview from "./pages/Dashboard/AddReview";

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
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
