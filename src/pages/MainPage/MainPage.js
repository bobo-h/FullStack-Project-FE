import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "./components/CalendarComponent";
import CatWidgetComponent from "./components/CatWiddetComponent";
import "./style/mainpage.style.css";

const MainPage = () => {
  // 여기부터 캘린더 관련 기능
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);
  const navigate = useNavigate();

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  // 여기부터 고양이 리스트 기능 // 제거하고 사이드바 만들기 [고양이 정보와 이미지 개인정보 등]
  const [isCatWidgetOpen, setIsCatWidgetOpen] = useState(false);
  const catWidgetRef = useRef(null);

  const toggleCatWidget = () => {
    setIsCatWidgetOpen((prev) => !prev);
  };

  // 캘린더와 고양이 위젯, 버튼 이외의 공간 클릭 시 해당 위젯 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCalendarOpen &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setIsCalendarOpen(false);
      }

      if (
        isCatWidgetOpen &&
        catWidgetRef.current &&
        !catWidgetRef.current.contains(event.target)
      ) {
        setIsCatWidgetOpen(false);
      }
    };

    // 이벤트 리스너를 한 번만 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen, isCatWidgetOpen]);

  // 닫기 버튼 공통 컴포넌트
  const CloseButton = ({ onClick, opt }) => (
    <button className={`close-button ${opt}`} onClick={onClick}>
      ✖ 닫기
    </button>
  );

  return (
    <div className="main-container">
      <img className="cats-room" src="backgroundimage.webp" alt="cats room" />
      {!isCalendarOpen ? (
        <button className="main-opt calendar-button" onClick={toggleCalendar}>
          📅
        </button>
      ) : (
        <div className="calendar-container" ref={calendarRef}>
          <CalendarComponent
            onDateClick={(date) => navigate(`/diary/${date}`)}
          />{" "}
          <CloseButton
            opt={"calendar-close"}
            onClick={() => setIsCalendarOpen(false)}
          />
        </div>
      )}
      {/* 고양이 리스트 버튼 및 컴포넌트 */}
      {!isCatWidgetOpen ? (
        <button className="main-opt cat-list-button" onClick={toggleCatWidget}>
          🐱
        </button>
      ) : (
        <div className="cat-widget-container" ref={catWidgetRef}>
          <CloseButton
            opt={"cat-list-close"}
            onClick={() => setIsCatWidgetOpen(false)}
          />
          <CatWidgetComponent />
        </div>
      )}
    </div>
  );
};

export default MainPage;
