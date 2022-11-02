import { useReducer, useRef, useState } from "react";
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

  // const UploadImage = {
  //   file : File,
  //   thumbnail : String,
  //   type : String,
  // }

  // const UploadImageFile = (e) => {
  //   const fileList = e.target.files;
  //   const length = fileList?.length;
  //   if(fileList && fileList[0]){
  //     setImg_url(URL.createObjectURL(fileList[0]));

  //     setImageFile({
  //       file : fileList[0],
  //       thumbnail : img_url,
  //       type: fileList[0].type.slice(0, 5),
  //     });
  //   }
  // }

  // const showImage = useState(() => {
  //   if (!imageFile && imageFile == null) {
  //     return <img alt="비어있는 프로필" />
  //   }
  //   return <showImageFile src={imageFile.thumbnail} alt={imageFile.type} onClick={onClickFile} />;
  // }, [imageFile]);


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img_url, setImg_url] = useState("");
  // const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const [resData, setResData] = useState("");

  const isLogin = window.localStorage.getItem("isLogin")
  if(isLogin === "FALSE") window.location.replace("/");

  const fileInput = React.useRef(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onClickFile = e => {
    fileInputRef.current?.click();
  };
  
  const onChangeFile = e => {
    console.log(e.target.files[0]);
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  }

  const onSubmit = async () => {
    try {
    // 서버에 대한 요청을 비동기로 처리 함
      const res =  await KhApi.galleryReg(title, content, img_url);
      setResData(res.data);
      
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box>
      {/* {showImage} */}
      <div style={{ marginTop: 50 }}>
        <Input placeholder="제목을 입력하세요." onChange={onChangeTitle} />
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
                        setContent(editor.getData());
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
      </div>
      <form>
        <Label for="upload-photo"  onClick={onClickFile}>파일 선택</Label>
        <input photo type="file" accept="image/jpg, image/jpeg, image/png" onChange={onChangeFile}
              id="upload-photo" className="photo" />
      </form>
    </Box>
  );
}

export default GalleryReg;