import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KhApi from "../api/KhApi";




const MemberInfo = () => {
  
  const [memberInfo, setMemberInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const isLogin = window.localStorage.getItem("isLogin");
  if(isLogin === "FALSE") window.location.replace("/");

  useEffect(() => {

    const memberData = async () => {
      setLoading(true);
      try {
        const response = await KhApi.memberInfo("ALL");
        setMemberInfo(response.data);
        console.log(response.data.map(e => e.id)); // 아이디만 추출
      } catch(e) {
        console.log(e);
      }
      setLoading(false); 
    }
    memberData();
  }, [])

  if(loading) {
    return <span>Wait, ,</span>
  }

  return (
    <div>
      <div>
        <div>회원 정보</div>
        <tr>
          <th>아이디 </th><th>이름</th><th>이메일</th><th>가입일</th>
        </tr>
        {memberInfo && memberInfo.map((member) => (
          <tr key={member.id}>
            <td>{member.id}</td><td>{member.name}</td><td>{member.email}</td><td>{member.join}</td>
          </tr>
        ))}
      </div>
      <Link to="/home">
          <p>홈으로 이동</p>
      </Link>
    </div>

  )
}

export default MemberInfo;