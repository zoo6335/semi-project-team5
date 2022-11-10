import axios from "axios";

const HEADER = "application/json";
const FB_DOMAIN = "http://192.168.110.34:8090/kh_mini_project/";

const Api = {
  // 게시글(전체글) 목록 조회
  fBoardList: async function () {
    const regCmd = {
      cmd: "FBoardList",
    };
    return await axios.post(FB_DOMAIN + "AllBoardListServlet", regCmd, HEADER);
  },

  // 게시글 상세 페이지 조회
  boardDetail: async function (fb_id) {
    const regCmd = {
      fb_id: fb_id,
    };
    return await axios.post(FB_DOMAIN + "DetailBoardServlet", regCmd, HEADER);
  },

  // 게시글(자유글) 목록 조회
  freeBoardList: async function () {
    const regCmd = {
      cmd: "FreeBoardList",
    };
    return await axios.post(FB_DOMAIN + "FreeBoardListServlet", regCmd, HEADER);
  },

  // 게시글(양도/교환) 목록 조회
  tradeBoardList: async function () {
    const regCmd = {
      cmd: "TradeBoardList",
    };
    return await axios.post(
      FB_DOMAIN + "TradeBoardListServlet",
      regCmd,
      HEADER
    );
  },

  // 게시글(테마추천) 목록 조회
  recommendBoardList: async function () {
    const regCmd = {
      cmd: "RecommendBoardList",
    };
    return await axios.post(
      FB_DOMAIN + "RecommendBoardListServlet",
      regCmd,
      HEADER
    );
  },

  // 게시글(방탈출팁) 목록 조회
  tipBoardList: async function () {
    const regCmd = {
      cmd: "TipBoardList",
    };
    return await axios.post(FB_DOMAIN + "TipBoardListServlet", regCmd, HEADER);
  },

  // 게시글 작성
  fBoardCreate: async function (fb_category, fb_user_id, fb_title, fb_content) {
    const boardObj = {
      fb_category: fb_category,
      fb_user_id: fb_user_id,
      fb_title: fb_title,
      fb_content: fb_content,
    };
    return await axios.post(
      FB_DOMAIN + "FBoardCreateServlet",
      boardObj,
      HEADER
    );
  },

  // 게시글 수정(DB 불러오기)
  fboardUpdatePull: async function (fb_id) {
    const regCmd = {
      fb_id: fb_id,
    };
    return await axios.post(
      FB_DOMAIN + "UpdatePullBoardServlet",
      regCmd,
      HEADER
    );
  },

  // 게시글 수정(DB 입력하기)
  fboardUpdatePush: async function (fb_category, fb_title, fb_content, fb_id) {
    const boardCmd = {
      fb_category: fb_category,
      fb_title: fb_title,
      fb_content: fb_content,
      fb_id: fb_id,
    };
    return await axios.post(
      FB_DOMAIN + "UpdatePushBoardServlet",
      boardCmd,
      HEADER
    );
  },

  // 게시글 삭제
  fBoardDelete: async function (fb_id) {
    const idCheck = {
      fb_id: fb_id,
    };
    return await axios.post(FB_DOMAIN + "fBoardDeleteServlet", idCheck, HEADER);
  },

  // 조회수
  fBoardHit: async function (fb_id, fb_hit) {
    const boardCmd = {
      fb_id: fb_id,
      fb_hit: fb_hit,
    };
    return await axios.post(FB_DOMAIN + "HitBoardServlet", boardCmd, HEADER);
  },

  // 댓글수
  fBoardComment: async function (fb_id) {
    const boardCmd = {
      fb_id: fb_id,
    };
    return await axios.post(
      FB_DOMAIN + "CommentBoardServlet",
      boardCmd,
      HEADER
    );
  },
};
export default Api;
