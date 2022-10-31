import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KhApi from "../api/KhApi";




const MemberInfo = () => {
  
  const [memberInfo, setMemberInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const memberData = async () => {
      setLoading(true);
      try {
        const response = await KhApi.memberInfo();
        setMemberInfo(response.data);
        const infoId = response.data.map(e => [e.id, e.pwd, e.name, e.email]);  // 아이디 비밀번호 찾을때 쓴다
        console.log(infoId);
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