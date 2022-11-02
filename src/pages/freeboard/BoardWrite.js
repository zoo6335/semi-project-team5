import './style.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';
import Api from "../../api/FbApi";

// 게시글 작성 구현중
function FreeBoardWrite() {

  const [fb_category, setFb_Category] = useState("");
  const [fb_title, setFb_Title] = useState("");
  const [fb_content, setFb_Content] = useState("");
  const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터

  const onChangeCategory = (e) => setFb_Category(e.target.value);
  const onChangeTitle = (e) => setFb_Title(e.target.value);
  const onChangeContent = (contentSet) => setFb_Content(contentSet);

  // 등록 확인 모달창
  const onClickCreate = async () => {
    try {
      const res = await Api.fBoardCreate(fb_title, fb_content, fb_category);
      setResData(res.data);
      console.log("등록 완료");
      console.log(fb_content);
      if(res.data.result === "OK") {
        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  function onClickCancel() {
    alert("취소하시겠습니까?")
    window.location.replace("/");
  }

  return (
    <div className="App">
      <div className="board-title">
        <p>게시글 작성</p>
      </div>
      <form>
      <div className='form-wrapper'>
          <select name="board-category" value={fb_category} onChange={onChangeCategory}>
            <option value="[선택]" disabled>선택하세요</option>
            <option value="[자유글]">[자유글]</option>
            <option value="[양도/교환]">[양도/교환]</option>
            <option value="[테마추천]">[테마추천]</option>
            <option value="[방탈출팁]">[방탈출팁]</option>
          </select>
        <input className="title-input" type='text' value={fb_title}  onChange={onChangeTitle} placeholder='제목을 입력해주세요.' />
        <CKEditor
          editor={ClassicEditor}
          data="<p>자유롭게 작성해주세요😊</p>"
          showToolbar={true}
          setDefaultStyle="height: auto"
          onChange={(fb_content) => {
            onChangeContent(fb_content);
          }}
          setContents={fb_content}
          setOptions={{
            buttonList: [
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "list",
                "align",
                "fontSize",
                "formatBlock",
                "table",
                "image",
              ],
            ],
          }}
        />
      </div>
      <div className='write-page-button'>
        <button className="cancel-button" onClick={onClickCancel}>취소</button>
        <button className="submit-button" onClick={onClickCreate}>등록</button>
      </div>
      
      </form>
      {resData &&  resData.map(list =>(
                <>
                <p key={list.index}>분류 : {list.fb_category}</p> 
                <p key={list.index}>제목 : {list.fb_title}</p>
                <p key={list.index}>내용 : {list.fb_content}</p>
                </>
            ))}
    </div>
  );
}

export default FreeBoardWrite;