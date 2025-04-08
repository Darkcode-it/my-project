
import './App.css'
import Menu from "./component/Menu.jsx";
import Header from "./component/Header.jsx";
import First from "./component/First.jsx";
import Second from "./component/Second.jsx";
import Third from "./component/Third.jsx";
import Foo from "./component/./Foo.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";


function App() {

  // return (
  //   <main>
  //     <Menu />
  //     <Header />
  //     <First />
  //     <Second />
  //     <Third />
  //     <Foo />

  //   </main>
  // )

  return (

    <Router>
      <Routes>
        <Route path="/my-project" element={<Home />} />
        <Route path="/my-project/login" element={<Login />} />
        <Route path="/my-project/register" element={<Register />} />
        <Route path="*" element={ "404 Not Found"} />
      </Routes>
    </Router>
  )
}

export default App
