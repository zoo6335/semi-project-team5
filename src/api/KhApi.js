import axios from "axios";
const HEADER = 'application/json';
const DOMAIN = "http://localhost:8090/kh_mini_project/";

const KhApi = {
    // 로그인 기능 ( userLogin이 useState의 프로퍼티로 역할)
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(DOMAIN + "LoginServlet", loginObj, HEADER); // 백엔드 통신 주소 
    },
    // 회원 정보 조회
    memberInfo: async function(id) {
        const regCmd = {
            cmd : "MemberInfo",
            id : id
        }
        return await axios.post(DOMAIN + "MemberServlet", regCmd, HEADER);
    },
    // 회원 가입
    memberReg: async function(id, pwd, name, mail) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            mail: mail
        };
        return await axios.post(DOMAIN + "MemberRegServlet", memberObj, HEADER);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async function(id) {
        const regCheck = {
            id: id,
        }
        return await axios.post(DOMAIN + "MemberCheck", regCheck, HEADER);
    },

    memberDelete: async function(id) {
        const memberDel = {
            id:id,
        }
        return await axios.post(DOMAIN + "MemberDelServlet", memberDel, HEADER);
    },

    findMember: async function() {
        const regCmd = {
            cmd : "MemberInfo"
        }
        return await axios.post(DOMAIN + "MemberServlet", regCmd, HEADER);
    },

    memberUpdate: async function(id, pwd, name, mail) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            mail: mail
        };
        return await axios.post(DOMAIN + "MemberUpdateServlet", memberObj, HEADER);
    },
    

}

export default KhApi;