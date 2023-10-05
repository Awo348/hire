import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Pricing from "./pages/pricing/pricing";
import Login from "./pages/login/login";
import AdminPageOne from "./pages/admin/admin-page1/adminPage1";
// import AdminPageTwo from "./pages/admin/admin-page2/adminPage2";
// import AdminPageThree from "./pages/admin/admin-page3/adminPage3";
import Register from "./pages/register/register";
import Advertise from "./pages/advertise/advertise";
import Works from "./pages/works/works";
import RegisterMulti from "./pages/register-multi/registerMulti";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-multi" element={<RegisterMulti />} />
        <Route path="/admin" element={<AdminPageOne />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
