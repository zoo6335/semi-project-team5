import Login from "./pages/Login";
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
import About from './pages/About';
import {TestA, TestB, TestC, TestD, TestE, TestF} from "./pages/DummyPages";
import MemberUpdate from "./pages/MemberUpdate";
import Gallery from "./pages/Gallery";

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
        <Route path="/about" element={<About />} />
        <Route path="/theme" element={<TestA />} />
        <Route path="/freeboard" element={<TestB />} />
        <Route path="/getparty" element={<TestC />} />
        <Route path="/bragging" element={<TestD />} />
        <Route path="/memberUpdate" element={<MemberUpdate />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
