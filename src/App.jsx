
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/my-project" element={<Home />} />
        <Route path="/my-project/login" element={<Login />} />
        <Route path="/my-project/register" element={<Register />} />
        <Route path="*" element={"404 Not Found"} />
      </Routes>
    </Router>
  )
}

export default App
