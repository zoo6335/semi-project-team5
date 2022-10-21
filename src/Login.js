import { useState } from "react";
const Login = () => {

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onChangeId = (e) => {
    setInputId(e.target.value);
  }

  const onChangePw = (e) => {
    setInputPw(e.target.value);
  }

  const onClickLogin = () => {
    
  }

  return (
    <div>
      <div>
        <input value={inputId} onChange={onChangeId} />
        <input value={inputPw} onChange={onChangePw} />
        <button onClick={onClickLogin}>Login</button>
        <button>Cancle</button>
      </div>
    </div>
  ) 
}

