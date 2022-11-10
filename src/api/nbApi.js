// 일행구하기 게시판 API

import axios from "axios";

const HEADER = "application/json";
const NB_DOMAIN = "http://localhost:8090/kh_mini_project/";

const nbApi = {
  // 게시판 리스트 불러오기
  TBoardList: async function () {
    const regCmd = {
      cmd: "TBoardList",
    };
    return await axios.post(NB_DOMAIN + "BoardServlet", regCmd, HEADER);
  },

  // 게시판 글작성
  onWrite: async function (
    gmb_user_id,
    gmb_title,
    gmb_content,
    gmb_apply_total
  ) {
    const BoardObj = {
      gmb_user_id: gmb_user_id,
      gmb_title: gmb_title,
      gmb_content: gmb_content,
      gmb_apply_total: gmb_apply_total,
    };
    return await axios.post(NB_DOMAIN + "BoardWriteServlet", BoardObj, HEADER);
  },

  // 게시물 상세페이지 조회
  onDetail: async function (gmb_id) {
    const DetailObj = {
      gmb_id: gmb_id,
    };
    return await axios.post(
      NB_DOMAIN + "BoardDetailServlet",
      DetailObj,
      HEADER
    );
  },

  // 게시물 조회수증가
  onUpdateHit: async function (gmb_id, gmb_hit) {
    const DetailObj = {
      gmb_id: gmb_id,
      gmb_hit: gmb_hit,
    };
    return await axios.post(
      NB_DOMAIN + "BoardUpdateHitServlet",
      DetailObj,
      HEADER
    );
  },

  // 게시물 삭제
  onDelete: async function (gmb_id) {
    const DeleteObj = {
      gmb_id: gmb_id,
    };
    return await axios.post(
      NB_DOMAIN + "BoardDeleteServlet",
      DeleteObj,
      HEADER
    );
  },

  // 게시물 수정
  TBoardListUpdate: async function (
    gmb_title,
    gmb_content,
    gmb_apply_total,
    gmb_id
  ) {
    const UpdateObj = {
      gmb_title: gmb_title,
      gmb_content: gmb_content,
      gmb_id: gmb_id,
      gmb_apply_total: gmb_apply_total,
    };
    return await axios.post(
      NB_DOMAIN + "BoardUpdateServlet",
      UpdateObj,
      HEADER
    );
  },

  // 모집 신청하기
  onApply: async function (gmb_id, gmb_apply) {
    const ApplyObj = {
      gmb_id: gmb_id,
      gmb_apply: gmb_apply,
    };
    return await axios.post(NB_DOMAIN + "BoardApplyServlet", ApplyObj, HEADER);
  },
};
export default nbApi;
