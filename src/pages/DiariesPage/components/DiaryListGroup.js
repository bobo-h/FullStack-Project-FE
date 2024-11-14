import React from "react";

const DiaryListGroup = ({ groupedDiaryEntries = {} }) => {
  if (!groupedDiaryEntries || Object.keys(groupedDiaryEntries).length === 0) {
    return <p>No diary entries available.</p>;
  }

  return (
    <div>
      {Object.keys(groupedDiaryEntries).map((monthYear) => (
        <div key={monthYear} style={{ marginBottom: "20px" }}>
          <h2>{monthYear}</h2>
          {groupedDiaryEntries[monthYear].map((entry) => (
            <div
              key={entry.id}
              style={{ paddingLeft: "20px", marginBottom: "10px" }}
            >
              <p>{`${entry.date.year}.${String(entry.date.month).padStart(
                2,
                "0"
              )}.${String(entry.date.day).padStart(2, "0")} (${
                entry.date.dayOfWeek
              })`}</p>
              <h3>{entry.title}</h3>
              <p>{entry.content}</p>
              {entry.photo && (
                <img
                  src={entry.photo}
                  alt={entry.title}
                  style={{ width: "100px" }}
                />
              )}
              <p>Mood: {entry.mood}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DiaryListGroup;
