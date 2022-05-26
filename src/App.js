import "./App.css";
import Navber from "./pages/Shared/Navber/Navber";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./pages/LogIn/Login/Login";

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Home></Home>
      <Footer></Footer>
      <Login></Login>
    </div>
  );
}

export default App;
