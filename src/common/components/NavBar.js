import React, { useState, useEffect, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../style/common.style.css";
import debounce from "lodash.debounce";

const Navbar = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const items = [
    { icon: "🏠", text: "Home", path: "/" },
    { icon: "📔", text: "Diary", path: "/diaries" },
    { icon: "➕", text: "Write", path: "/diaries/new" },
    { icon: "🛒", text: "Shop", path: "/shop" },
    { icon: "👤", text: "My", path: "/my-page" },
  ];

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 300); // 300ms debounce 적용

    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 메모이제이션된 이벤트 핸들러
  const handleMouseEnter = useCallback(
    (index) => {
      if (hoveredIndex !== index) {
        setHoveredIndex(index);
      }
    },
    [hoveredIndex]
  );

  const handleMouseLeave = useCallback(() => {
    if (hoveredIndex !== null) {
      setHoveredIndex(null);
    }
  }, [hoveredIndex]);

  const handleClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div className="app-navbar">
      <div className="app-options">
        {items.map((item, index) => (
          <div
            key={index}
            className={`app-option-items ${
              hoveredIndex === index && windowWidth >= 700 ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item.path)}
          >
            {windowWidth >= 700 && hoveredIndex === index ? (
              <span className="item-text">{item.text}</span>
            ) : (
              <span className="icon">{item.icon}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Navbar;
