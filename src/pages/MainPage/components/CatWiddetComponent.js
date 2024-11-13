import React from "react";

const CatWidgetComponent = () => {
  // 고양이 리스트 컴포넌트
  const cats = [
    { name: "고양이 1", age: 2 },
    { name: "고양이 2", age: 3 },
    { name: "고양이 3", age: 1 },
  ];

  return (
    <div className="cat-widget">
      <h3>내 고양이 리스트</h3>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            {cat.name} - {cat.age}살
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatWidgetComponent;
