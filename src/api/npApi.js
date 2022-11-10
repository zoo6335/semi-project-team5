import axios from "axios";

const HEADER = "application/json";
const NB_DOMAIN = "http://192.168.110.34:8090/kh_mini_project/";

const npApi = {
  // 게시판 글작성
  onWrite: async function (title, content) {
    const boardObj = {
      title: title,
      content: content,
    };
    return await axios.post(
      NB_DOMAIN + "ReviewBoardWriteServlet",
      boardObj,
      HEADER
    );
  },

  RBoardList: async function () {
    const regCmd = {
      cmd: "RBoardList",
    };
    return await axios.post(NB_DOMAIN + "ReviewBoardServlet", regCmd, HEADER);
  },
};
export default npApi;
