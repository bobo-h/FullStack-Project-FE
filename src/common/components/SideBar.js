import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../style/sidebar.style.css";
import debounce from "lodash.debounce";

const SideBar = ({ currentPage, isSidebarActive, setIsSidebarActive }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 300); // 300ms debounce 적용

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 토글 함수
  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };

  const animationClass =
    currentPage === "home"
      ? "slide-in-right"
      : currentPage === "diary"
      ? "slide-in-left"
      : "";

  // 모든 조건을 배열로 관리하여 클래스 이름 설정
  const sidebarClasses = [
    "sidebar-container", // 기본 클래스
    windowWidth >= 700 ? "desktop-sidebar" : "", // 데스크탑 모드에서 항상 보이도록 설정
    windowWidth < 700 && isSidebarActive ? "active" : "", // 모바일 모드에서 활성 상태일 때 추가
    isSidebarActive && animationClass ? animationClass : "hidden", // 애니메이션 클래스 또는 숨김 상태
  ]
    .filter(Boolean) // 빈 문자열 또는 false 값 제거
    .join(" "); // 배열을 공백으로 구분된 문자열로 변환

  return (
    <>
      <div className={sidebarClasses}>
        <h1 className="project-title">MeowMemo</h1>
        <div className="user-image" />
        <div className="user-info">개인정보</div>
        <div className="cat-list-container">
          <h2 className="cat-list-title">고양이 리스트</h2>
          {/* 고양이 리스트 아이템들 */}
        </div>
      </div>
      {/* 700px 미만에서만 표시되는 토글 버튼 */}
      {windowWidth < 700 && isSidebarActive ? (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </div>
      ) : (
        <></>
        // <button className={`sidebar-toggle-close`} onClick={""}>
        //   ✖
        // </button>
      )}
    </>
  );
};

export default SideBar;

