import React, { useState, useEffect } from "react";
import "../style/sidebar.style.css";
import debounce from "lodash.debounce";

// 하위 컴포넌트로 분리하여 코드 가독성 및 재사용성을 높이자.
const SideBar = ({ currentPage, isSidebarActive, setIsSidebarActive }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 300); // 300ms debounce 적용

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 토글 함수 및 사이드바 닫을때
  const toggleSidebar = () => {
    if (isSidebarActive) {
      // 닫히는 애니메이션 적용
      const sidebar = document.querySelector(".sidebar-container");
      sidebar.classList.add("closing");
      const overlay = document.querySelector(".overlay");
      overlay.classList.add("closing");

      // 애니메이션이 완료된 후 상태 업데이트
      setTimeout(() => {
        setIsSidebarActive(false);
        sidebar.classList.remove("closing");
        overlay.classList.remove("closing");
      }, 500); // 애니메이션 시간(0.5초)와 같게
    } else {
      setIsSidebarActive(true);
    }
  };

  const animationClass =
    currentPage === "home"
      ? "slide-in-right"
      : currentPage === "diary"
      ? "slide-in-left"
      : "";

  const isDesktop = windowWidth >= 700;
  const isMobileActive = windowWidth < 700 && isSidebarActive;

  // 모든 조건을 배열로 관리하여 클래스 이름 설정
  const sidebarClasses = [
    "sidebar-container", // 기본 클래스
    isDesktop ? "desktop-sidebar" : "", // 데스크탑 모드에서 항상 보이도록 설정
    isMobileActive ? "active" : "", // 모바일 모드에서 활성 상태일 때 추가
    isSidebarActive && animationClass ? animationClass : "hidden", // 애니메이션 클래스 또는 숨김 상태
  ]
    .filter(Boolean) // 빈 문자열 또는 false 값 제거
    .join(" "); // 배열을 공백으로 구분된 문자열로 변환

  return (
    <>
      <SidebarContainer
        sidebarClasses={sidebarClasses}
        toggleSidebar={toggleSidebar}
        windowWidth={windowWidth}
        isSidebarActive={isSidebarActive}
        currentPage={currentPage}
      />
    </>
  );
};

// SidebarContainer 하위 컴포넌트
const SidebarContainer = ({
  sidebarClasses,
  toggleSidebar,
  windowWidth,
  isSidebarActive,
  currentPage,
}) => {
  return (
    <>
      {/* 사이드바가 활성화된 경우에만 오버레이 표시 */}
      {isSidebarActive && windowWidth < 700 && (
        <div className="overlay" onClick={toggleSidebar}></div>
      )}
      <div className={sidebarClasses}>
        <h1 className="project-title">MeowMemo</h1>
        <div className="user-image" />
        <div className="user-info">개인정보</div>
        <div className="cat-list-container">
          <h2 className="cat-list-title">고양이 리스트</h2>
        </div>
      </div>

      {windowWidth < 700 &&
      !isSidebarActive &&
      (currentPage === "home" || currentPage === "diary") ? (
        <ToggleButton toggleSidebar={toggleSidebar} />
      ) : null}
    </>
  );
};

// ToggleButton 컴포넌트
const ToggleButton = ({ toggleSidebar }) => {
  return (
    <div className="sidebar-toggle" onClick={toggleSidebar}>
      ☰
    </div>
  );
};

export default SideBar;
