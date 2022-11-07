import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './review.css';
import ReactHtmlParser from 'html-react-parser';
import npApi from '../../api/npApi';


function App2() {
    const [reviewContent, setreviewContent] = useState({
        title: '',
        content: ''
    })


    const [viewContent, setViewContent] = useState([]);
    const [resData, setResData] = useState("");
    const [saveTitle, setSaveTitle] = useState("");


    const getValue = e => {
        const { name, value } = e.target;
        setreviewContent({
            ...reviewContent,
            [name]: value
        })
    };



    const onSubmit = async (e) => {

        try {
            // 서버에 대한 요청을 비동기로 처리 함
            const res = await npApi.onWrite(reviewContent.title, reviewContent.content);
            console.log(reviewContent.name + reviewContent.content);
            setResData(res.data);
            console.log("작성완료 버튼 클릭");
            if (res.data.result === "OK") {
                window.location.replace("/reviewlist");
            }
            e.preventDefault();
            // setSaveTitle(reviewContent.title);

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="App2">
            <h1 className='title-review'>Review</h1>
            <div className='review-container2'>


                <h2>{reviewContent.title}</h2>
                <div>
                    {ReactHtmlParser(reviewContent.content)}
                </div>


            </div>
            <div className='form-wrapper2'>
                <input className="title-input2"
                    type='text'
                    placeholder='제목'
                    onChange={getValue}
                    name='title'
                />
                <CKEditor

                    editor={ClassicEditor}
                    data="후기를 입력하세요"
                    onReady={editor => {

                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setreviewContent({
                            ...reviewContent,
                            content: data
                        })
                        console.log("name : " + reviewContent.title);
                        console.log("content : " + reviewContent.content);

                    }}

                />
            </div>
            <button
                className="submit-button2"
                // onClick={(           
                // ) => {
                //     setViewContent(viewContent.concat({ ...reviewContent }));
                // }}
                onClick={onSubmit}
            >입력</button>
        </div>
    );
}

export default App2;
