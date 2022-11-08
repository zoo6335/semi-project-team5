import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Auth from "./Auth";
import BoardDetail from "./pages/freeboard/BoardDetail";
import FindId from "./pages/login/FindId";
import FindPwd from "./pages/login/FindPwd";
import FreeBoardFree from "./pages/freeboard/BoardMain/CategoryPages/Board_Free";
import FreeBoardMain from "./pages/freeboard/BoardMain/BoardMain";
import FreeBoardRecommend from "./pages/freeboard/BoardMain/CategoryPages/Board_Recommend";
import FreeBoardTip from "./pages/freeboard/BoardMain/CategoryPages/Board_Tip";
import FreeBoardTrade from "./pages/freeboard/BoardMain/CategoryPages/Board_Trade";
import FreeBoardUpdate from "./pages/freeboard/BoardUpdate";
import FreeBoardWrite from "./pages/freeboard/BoardWrite";
import GalleryReg from "./pages/gallery/GalleryReg";
import Header from "./components/Header";
import Home from "./home/home";
import InntroMember from "./pages/introduce/IntroMember";
import Intro from "./pages/introduce/Intro";
import Intro10 from "./pages/introduce/intro10";
import Intro11 from "./pages/introduce/intro11";
import Intro12 from "./pages/introduce/intro12";
import Intro2 from "./pages/introduce/Intro2";
import Intro3 from "./pages/introduce/Intro3";
import Intro4 from "./pages/introduce/Intro4";
import Intro5 from "./pages/introduce/Intro5";
import Intro6 from "./pages/introduce/Intro6";
import Intro7 from "./pages/introduce/Intro7";
import Intro8 from "./pages/introduce/Intro8";
import Intro9 from "./pages/introduce/intro9";
import Introduce from "./pages/introduce/Introduce";
import Login from "./pages/login/Login";
import MemberUpdate from "./pages/login/MemberUpdate";
import MyPage from "./pages/login/MyPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Profile from "./pages/login/Profile";
import RBoardList from "./pages/introduce/reviewlist";
import Review from "./pages/introduce/review";
import SignUp from "./pages/login/SignUp";
import TBoardDetail from "./pages/findboard/BoardDetail";
import TBoardList from "./pages/findboard/Boardlist";
import TEditBoard from "./pages/findboard/EditBoard";
import WriteBoard from "./pages/findboard/WriteBoard";
<<<<<<< HEAD
=======
import Intro10 from "./pages/introduce/intro10";
import Intro11 from "./pages/introduce/intro11";
import Intro12 from "./pages/introduce/intro12";

>>>>>>> 70bc886e5233252666f9db84ce29f2e42c0fbb2b

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
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPwd" element={<FindPwd />} />
        <Route path="/memberUpdate" element={<MemberUpdate />} />
        <Route path="/galleryReg" element={<GalleryReg />} />

        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        {/* <Route path='/showBoard' element={<ShowBoard />}/>
        <Route path='/showRoom' element={<ShowRoom />}/>
        <Route path='/selectType' element={<SelectType />}/> */}

        <Route path="/introduce" element={<Introduce />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/intro3" element={<Intro3 />} />
        <Route path="/intro4" element={<Intro4 />} />
        <Route path="/intro5" element={<Intro5 />} />
        <Route path="/intro6" element={<Intro6 />} />
        <Route path="/intro7" element={<Intro7 />} />
        <Route path="/intro8" element={<Intro8 />} />
        <Route path="/intro9" element={<Intro9 />} />
        <Route path="/intro10" element={<Intro10 />} />
        <Route path="/intro11" element={<Intro11 />} />
        <Route path="/intro12" element={<Intro12 />} />
        <Route path="/introMember" element={<InntroMember />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reviewlist" element={<RBoardList />} />

        <Route path="/totalBoard" element={<FreeBoardMain />} />
        <Route path="/boardFree" element={<FreeBoardFree />} />
        <Route path="/boardTrade" element={<FreeBoardTrade />} />
        <Route path="/boardRecommend" element={<FreeBoardRecommend />} />
        <Route path="/boardTip" element={<FreeBoardTip />} />
        <Route path="/boardDetail" element={<BoardDetail />} />
        <Route path="/boardWrite" element={<FreeBoardWrite />} />
        <Route path="/boardUpdate" element={<FreeBoardUpdate />} />

        <Route path="/tBoardList" element={<TBoardList />} />
        <Route path="/tWriteBoard" element={<WriteBoard />} />
        <Route path="/tBoardDetail" element={<TBoardDetail />} />
        <Route path="/tEditBoard" element={<TEditBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
