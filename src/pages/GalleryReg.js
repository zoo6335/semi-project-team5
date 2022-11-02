import { useState } from "react";
import KhApi from "../api/KhApi";
import styled from "styled-components";
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Box = styled.div`
  border: 4px solid #40BAAA;
  border-top: none;
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;

  .photo {
    display: none;
  }
`


const Input = styled.input`
  width: 550px;
  height: 50px;
  border-radius: 20px;
  border: 0.1px solid white;

`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 auto;
  border-radius: 20px;
  border: 0.1px solid cornsilk;
  background-color: cornsilk;

  & + & {
    margin-left : 50px;
  }
`;

const Label = styled.label`
  margin-top: 50px;
  cursor: pointer;
   /* Style as you please, it will become the visible UI component. */
`


const GalleryReg = () => {
  const isLogin = window.localStorage.getItem("isLogin")
  if(isLogin === "FALSE") window.location.replace("/");

  const fileInput = React.useRef(null);
  
  const handleButtonClick = e => {
    fileInput.current.click();
  };
  
  const handleChange = e => {
    console.log(e.target.files[0]);
  };

  // const onSubmit = async () => {
  //   try {
  //   // 서버에 대한 요청을 비동기로 처리 함
  //     const res =  await KhApi.memberReg(id, pwd, name, mail);
  //     setResData(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <Box>
      <div style={{ marginTop: 50 }}>
        <Input placeholder="제목을 입력하세요."/>
      </div>
      <div id="editor" style={{ marginTop : 50, minHeight: 400}}>
      <CKEditor
                    editor={ ClassicEditor }
                    config={{
                      placeholder: "내용을 입력하세요.",
                    }}
                  
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
      </div>
      <div>
        <Label for="upload-photo">파일 선택</Label>
        <input photo type="file" id="upload-photo" className="photo" />
      </div>
    </Box>
  );
}

export default GalleryReg;