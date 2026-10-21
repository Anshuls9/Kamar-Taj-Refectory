
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
