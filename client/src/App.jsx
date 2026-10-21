
import { BrowserRouter,Routes,Route } from "react-router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>

        <Route path="/login/student" element={<h1>.</h1>}/>
        <Route path="/login/staff" element={<h1>.</h1>}/>
        <Route path="/login/admin" element={<h1>.</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
