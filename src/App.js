import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login/Login" element={<Login/>}/>
        <Route path="/register/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
