/*global kakao*/
import React, { useEffect } from 'react'
import '../Map/Location.css';


const Location3 = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(35.108499817999096, 128.96668359797195),
            level: 3
        };

        var map = new kakao.maps.Map(container, options,);
        var markerPosition = new kakao.maps.LatLng(35.108499817999096, 128.96668359797195);
        var marker = new kakao.maps.Marker({
            title: '러시아워 로드맨션',
            position: markerPosition,

        }

        );

        marker.setMap(map);

        var iwContent = '<div style="padding:5px; font-size: small ">더락이스케이프 하단점<br><a href="http://kko.to/u1FOtdQfHX" style="color:blue" target="_blank"> 큰지도보기</a> <a href="http://kko.to/u1FOtdQfHX" style="color:blue" target="_blank"> 길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(35.108499817999096, 128.96668359797195); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);

    }, [])


    return (
        <>
            <div className="right_text">
                <h2>오시는길</h2>
                <div className="table-cell">
                    <dl>
                        <dt>지점명</dt>
                        <dd>더락이스케이프 하단점</dd>
                    </dl>
                    <dl>
                        <dt>TEL</dt>
                        <dd>051-292-5482 </dd>
                    </dl>
                    <dl>
                        <dt>OPEN</dt>
                        <dd>Mon ~ Sun</dd>
                    </dl>
                    <dl>
                        <dt>ADDRESS</dt>
                        <dd>부산광역시 사하구 낙동대로 493 보해이브빌 401호</dd>
                    </dl>
                    <dl>
                        <dt>담당자 E-MAIL</dt>
                        <dd><a href="mailto:dlwjddns2008@nate.com"> : dlwjddns2008@nate.com</a></dd>
                    </dl>
                    <dl>
                        <dt>입금계좌</dt>
                        <dd>결제는 현장 결제로 진행</dd>
                    </dl>

                </div>
                <div id="map" style={{ width: "500px", height: "400px", textAlign: "center", justifyContent: "center", margin: "auto", display: "block" }}></div>
            </div>



        </>
    )
}

export default Location3;