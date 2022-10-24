import Login from "./Login";
import './App.css';
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
