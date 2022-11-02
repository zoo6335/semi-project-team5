import axios from "axios";
const HEADER = 'application/json';
const KH_DOMAIN = "http://localhost:8090/kh_mini_project/";

const Api = {
    // 게시글(전체글) 목록 조회
    fBoardList: async function() {
        const regCmd = {
            cmd : "FBoardList"
        }
        return await axios.post(KH_DOMAIN + "AllBoardListServlet", regCmd, HEADER);
    },

    // 게시글 상세 페이지 조회
    boardDetail: async function(fb_id) {
        const regCmd = {
            fb_id : fb_id
        }
        return await axios.post(KH_DOMAIN + "DetailBoardServlet", regCmd, HEADER);
    },
    
    // 게시글(자유글) 목록 조회
    freeBoardList: async function() {
        const regCmd = {
            cmd : "FreeBoardList"
        }
        return await axios.post(KH_DOMAIN + "FreeBoardListServlet", regCmd, HEADER);
    },

    // 게시글(양도/교환) 목록 조회
    tradeBoardList: async function() {
        const regCmd = {
            cmd : "TradeBoardList"
        }
        return await axios.post(KH_DOMAIN + "TradeBoardListServlet", regCmd, HEADER);
    },

    // 게시글(테마추천) 목록 조회
    recommendBoardList: async function() {
        const regCmd = {
            cmd : "RecommendBoardList"
        }
        return await axios.post(KH_DOMAIN + "RecommendBoardListServlet", regCmd, HEADER);
    },

    // 게시글(방탈출팁) 목록 조회
    tipBoardList: async function() {
        const regCmd = {
            cmd : "TipBoardList"
        }
        return await axios.post(KH_DOMAIN + "TipBoardListServlet", regCmd, HEADER);
    },

    // 게시글 작성
    fBoardCreate: async function(fb_category, fb_user_id, fb_title, fb_content) {
        const boardObj = {
            fb_category : fb_category,
            fb_user_id : fb_user_id,
            fb_title : fb_title,
            fb_content : fb_content,
        };
        return await axios.post(KH_DOMAIN + "BoardCreateServlet", boardObj, HEADER);
    },

    // 작성자 id 일치 확인 (게시글, 댓글 수정 및 삭제)
    idCheck: async function(fb_user_id) {
        const idCheck = {
            fb_user_id: fb_user_id,
        }
        return await axios.post(KH_DOMAIN + "UpdateBoardServlet", idCheck, HEADER);
    },

    // 게시글 수정
    fboardUpdate: async function(fb_id) {
        const regCmd = {
            fb_id : fb_id
        }
        return await axios.post(KH_DOMAIN + "UpdateBoardServlet", regCmd, HEADER);
    },

    // 게시글 삭제
    fBoardDelete: async function(fb_id) {
        const idCheck = {
            fb_id: fb_id,
        }
        return await axios.post(KH_DOMAIN + "BoardDeleteServlet", idCheck, HEADER);
    },

    // 댓글 조회
    fCommentRead: async function() {
        const boardCmd = {
            cmd : "boardRead"
        }
        return await axios.post(KH_DOMAIN + "CommentReadServlet", boardCmd, HEADER);
    },

    // 댓글 작성
    FCommentCreate: async function(comment_user_id, comment_id, comment_content, comment_c_date, comment_u_date, comment_category) {
        const commentObj = {
            comment_user_id : comment_user_id,
            comment_id : comment_id,
            comment_content : comment_content,
            comment_c_date : comment_c_date,
            comment_u_date : comment_u_date,
            comment_category : comment_category,
            
        };
        return await axios.post(KH_DOMAIN + "CommentCreateServlet", commentObj, HEADER);
    },

    // 댓글 수정(작성자 id 일치 확인)
    FCommentUpdate: async function(comment_user_id) {
        const idCheck = {
            comment_user_id: comment_user_id,
        }
        return await axios.post(KH_DOMAIN + "CommentUpdateServlet", idCheck, HEADER);
    },

    // 댓글 삭제
    FCommentDelete: async function(comment_user_id) {
        const idCheck = {
            comment_user_id: comment_user_id,
        }
        return await axios.post(KH_DOMAIN + "CommentDeleteServlet", idCheck, HEADER);
    }
}
export default Api;