// import React, { useEffect } from "react";
// import KakaoLogin from "react-kakao-login";
// import axios from 'axios';

// const KakaoRedirectHandler = () => {
//   useEffect(()=> {
//     let params = new URL(document.location.toString()).searchParams;
//     let code = params.get("code"); // 인가코드 받는 부분
//     let grant_type = "authorization_code";
//     let client_id = "333ec9a36164c328f0d63277ae88f9df";

//     axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`, {
//     headers: {
//         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
//     }
//   }).then((res) => {
//       console.log(res.data);
//     const { data } = res;
//     const { access_token } = data;
    
//     if(access_token) {
//       console.log(`Beaer ${access_token}`);
//       axios.post(
//         "https://kapi.kakao.com/v2/user/me",
//         {},
//         {
//           headers : {
//             Authorization: `Beaer ${access_token}`,
//             "Content-type": "application/x-www-form-urlencoded",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res);
//       // });
//     } else{
//         console.log("access token 없음");
//       }
//     });
//   },[]);

//   return (<>
//   </>
//   )
//   };

// export default KakaoRedirectHandler;