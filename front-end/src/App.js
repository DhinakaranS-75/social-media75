import Home from "./Pages/home/Home.jsx";
import Register from "./Pages/register/Register.jsx";
import Login from "./Pages/login/Login.jsx";
import Profile from "./Pages/profile/Profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
