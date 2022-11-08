/*global kakao*/
import React, { useEffect } from 'react'
import '../Map/Location.css';


const Location6 = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.4980312958709, 127.02833386047068),
            level: 3
        };

        var map = new kakao.maps.Map(container, options,);
        var markerPosition = new kakao.maps.LatLng(37.4980312958709, 127.02833386047068);
        var marker = new kakao.maps.Marker({
            title: '세븐클루 강남1호점',
            position: markerPosition

        }

        );

        marker.setMap(map);

        var iwContent = '<div style="padding:5px;">세븐클루 강남점<br><a href="http://kko.to/HyK1Z9bHrI" style="color:blue" target="_blank"> 큰지도보기</a> <a href="http://kko.to/HyK1Z9bHrI" style="color:blue" target="_blank"> 길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(37.4980312958709, 127.02833386047068); //인포윈도우 표시 위치입니다

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
                        <dd>세븐클루 강남1호점</dd>
                    </dl>
                    <dl>
                        <dt>TEL</dt>
                        <dd> 010-6551-6561 </dd>
                    </dl>
                    <dl>
                        <dt>OPEN</dt>
                        <dd>Mon ~ Sun</dd>
                    </dl>
                    <dl>
                        <dt>ADDRESS</dt>
                        <dd>서울시 강남구 테헤란로 2길8 지하1층</dd>
                    </dl>
                    <dl>
                        <dt>담당자 E-MAIL</dt>
                        <dd><a href="mailto:dlwjddns2008@nate.com"> : dlwjddns2008@nate.com</a></dd>
                    </dl>
                    <dl>
                        <dt>입금계좌</dt>
                        <dd>현장결제 및 사이트예매</dd>
                    </dl>

                </div>
                <div id="map" style={{ width: "500px", height: "400px", textAlign: "center", justifyContent: "center", margin: "auto", display: "block" }}></div>
            </div>



        </>
    )
}

export default Location6;