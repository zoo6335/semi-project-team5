import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './review.css';
import ReactHtmlParser from 'html-react-parser';
// import nbApi from '../nbApi.js/npApi';


function App2() {
    const [reviewContent, setreviewContent] = useState({
        title: '',
        content: ''
    })


    const [viewContent, setViewContent] = useState([]);
    // const [resData, setResData] = useState("");


    const getValue = e => {
        const { name, value } = e.target;
        setreviewContent({
            ...reviewContent,
            [name]: value
        })
    };
    // const onSubmit = async () => {
    //     try {
    //         // 서버에 대한 요청을 비동기로 처리 함
    //         const res = await nbApi.onWrite(viewContent);
    //         setResData(res.data);
    //         console.log("작성완료 버튼 클릭");
    //         if (res.data.result === "OK") {
    //             window.location.replace("/");
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };  async를 만들어보았지만 감이 안잡힙니다...

    return (
        <div className="App2">
            <h1>Review</h1>
            <div className='review-container'>
                {viewContent.map(element =>
                    <div style={{ border: '1px solid #333' }}>
                        <h2>{element.title}</h2>
                        <div>
                            {ReactHtmlParser(element.content)}
                        </div>
                    </div>
                )}
            </div>
            <div className='form-wrapper'>
                <input className="title-input"
                    type='text'
                    placeholder='제목'
                    onChange={getValue}
                    name='title'
                />
                <CKEditor

                    editor={ClassicEditor}
                    data="<p>후기를 입력하세요</p>"
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
                    }}

                />
            </div>
            <button
                className="submit-button"
                onClick={(           // onSubmit을넣으면 통신하게끔 만들고싶음 ㅠ
                ) => {
                    setViewContent(viewContent.concat({ ...reviewContent }));
                }}
            >입력</button>
        </div>
    );
}

export default App2;
