
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import StaffLogin from "./pages/StaffLogin";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>

        <Route path="/login/student" element={<StudentLogin/>}/>
        <Route path="/login/staff" element={<StaffLogin/>}/>
        <Route path="/login/admin" element={<AdminLogin/>}/>

        <Route path="/login/student/dashboard" element={<StudentDashboard/>}/>  
        <Route path="/login/staff/dashboard" element={<StaffDashboard/>}/>  
        <Route path="/login/admin/dashboard" element={<AdminDashboard/>}/>  

        <Route path="/login/student/checkout" element={<Checkout/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
