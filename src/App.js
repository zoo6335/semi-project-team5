import Login from "./pages/Login";
import './App.css';
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import SignUp from "./signup/SignUp";
import FindId from "./pages/FindId";
import FindPwd from "./pages/FindPwd";
import MyPage from "./pages/MyPage";
import Home from "./home/home";
import Header from "./components/Header";
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShowBoard from "./components/ShowBoard";
import ShowRoom from "./components/ShowRoom";
import SelectType from './components/SelectType';
import MemberUpdate from "./pages/MemberUpdate";
import Gallery from "./pages/GalleryInfo";
import GalleryReg from "./pages/GalleryReg";
import Intro from "./pages/introduce/Intro";
import Intro2 from "./pages/introduce/Intro2";
import Intro3 from "./pages/introduce/Intro3";
import Intro4 from "./pages/introduce/Intro4";
import Intro5 from "./pages/introduce/Intro5";
import Intro6 from "./pages/introduce/Intro6";
import Intro7 from "./pages/introduce/Intro7";
import Intro8 from "./pages/introduce/Intro8";
import Introduce from './pages/introduce/Introduce';
import InntroMember from './pages/introduce/IntroMember';
import Review from './pages/introduce/review';
import FreeBoardMain from "./pages/freeboard/BoardMain/BoardMain";
import FreeBoardFree from "./pages/freeboard/BoardMain/CategoryPages/Board_Free";
import FreeBoardTrade from "./pages/freeboard/BoardMain/CategoryPages/Board_Trade";
import FreeBoardRecommend from "./pages/freeboard/BoardMain/CategoryPages/Board_Recommend";
import FreeBoardTip from "./pages/freeboard/BoardMain/CategoryPages/Board_Tip";
import FreeBoardWrite from "./pages/freeboard/BoardWrite";
import BoardDetail from "./pages/freeboard/BoardDetail";
import TBoardList from "./pages/findboard/Boardlist";
import WriteBoard from "./pages/findboard/WriteBoard";
import TBoardDetail from "./pages/findboard/BoardDetail";
import TEditBoard from "./pages/findboard/EditBoard";


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
        <Route path="/introMember" element={<InntroMember />} />
        <Route path="/review" element={<Review />} />

        <Route path="/freeboard" element={<FreeBoardMain />}/>
        <Route path="/boardFree" element={<FreeBoardFree />}/> 
        <Route path="/boardTrade" element={<FreeBoardTrade />}/> 
        <Route path="/boardRecommend" element={<FreeBoardRecommend />}/> 
        <Route path="/boardTip" element={<FreeBoardTip />}/> 
        <Route path="/boardDetail" element={<BoardDetail />} />
        <Route path="/boardWrite" element={<FreeBoardWrite />} />

        <Route path="/tBoardList" element={<TBoardList />} />
        <Route path="/tWriteBoard" element={<WriteBoard />} />
        <Route path="/tBoardDetail" element={<TBoardDetail />} />
        <Route path="/tEditBoard" element={<TEditBoard />} />

      </Routes>
    </Router>
  );
}

export default App;
