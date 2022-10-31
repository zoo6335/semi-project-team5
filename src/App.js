import Login from "./Login";
import './App.css';
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import SignUp from "./signup/SignUp";
import MemberInfo from "./pages/MemberInfo";
import FindId from "./pages/FindId";
import FindPwd from "./pages/FindPwd";
import MyPage from "./pages/MyPage";
import Home from "./home/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/memberInfo" element={<MemberInfo />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPwd" element={<FindPwd />} />
      </Routes>
    </Router>
  );
}

export default App;
