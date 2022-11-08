import React, { useEffect, useState } from "react";
import axios from "axios";
import KakaoLogin from "react-kakao-login";

const Profile = () => {
  const [user_id, setUserId] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
        const data = await window.Kakao.API.request({
          url: "/v2/user/me",
        }
      );
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.profile_nickname);
      setEmail(data.properties.account_email);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
    </div>
  );
};
export default Profile;