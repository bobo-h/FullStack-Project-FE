import React from "react";
import DiaryListFilter from "./DiaryListFilter";

const DiaryListControls = ({ onFilterChange }) => {
  return (
    <div>
      검색은 공통 컴포넌트로 생성 예정
      <DiaryListFilter onFilterChange={onFilterChange} />
    </div>
  );
};

export default DiaryListControls;
