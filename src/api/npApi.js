import axios from "axios";
const HEADER = "application/json";
const NB_DOMAIN = "http://localhost:8090/test_ex/";

const npApi = {


  // 게시판 글작성
  onWrite: async function (title, content) {
    const boardObj = {
      title: title,
      content: content
    };
    return await axios.post(NB_DOMAIN + "BoardWriteServlet", boardObj, HEADER);
  },

  RBoardList: async function () {
    const regCmd = {
      cmd: "RBoardList",
    }
    return await axios.post(NB_DOMAIN + "BoardServlet", regCmd, HEADER);
  }

}
export default npApi;
