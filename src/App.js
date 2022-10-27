import Login from "./Login";
import './App.css';
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import SignUp from "./signup/SignUp";
import Home from "./home/home";
import MemberInfo from "./pages/MemberInfo";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myinfo" element={<MemberInfo />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
