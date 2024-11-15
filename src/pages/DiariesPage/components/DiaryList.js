const DiaryList = () => {
  const groupedDiaryEntries = {
    "2024-11": [
      {
        id: 1,
        date: { year: 2024, month: 11, day: 13, dayOfWeek: "Wednesday" },
        title: "Lovely Autumn Walk",
        content:
          "Took a long walk in the park. The leaves are beautiful shades of orange and red!",
        photo: "https://example.com/photo1.jpg",
        mood: "Calm",
      },
      {
        id: 2,
        date: { year: 2024, month: 11, day: 10, dayOfWeek: "Sunday" },
        title: "Sunday Brunch",
        content: "Had brunch with some friends. Tried a new cafe and loved it!",
        photo: "https://example.com/photo2.jpg",
        mood: "Happy",
      },
    ],
    "2024-10": [
      {
        id: 3,
        date: { year: 2024, month: 10, day: 31, dayOfWeek: "Thursday" },
        title: "Halloween Fun",
        content: "Went to a Halloween party and dressed as a witch!",
        photo: "https://example.com/photo3.jpg",
        mood: "Excited",
      },
      {
        id: 4,
        date: { year: 2024, month: 10, day: 22, dayOfWeek: "Tuesday" },
        title: "Rainy Day",
        content:
          "Spent the day indoors reading a good book. It was cozy and relaxing.",
        photo: "https://example.com/photo4.jpg",
        mood: "Calm",
      },
      {
        id: 5,
        date: { year: 2024, month: 10, day: 20, dayOfWeek: "Sunday" },
        title: "Family Gathering",
        content:
          "Had a wonderful family gathering. Everyone was so happy to see each other.",
        photo: "https://example.com/photo5.jpg",
        mood: "Happy",
      },
    ],
    "2024-09": [
      {
        id: 6,
        date: { year: 2024, month: 9, day: 1, dayOfWeek: "Sunday" },
        title: "Beach Day",
        content: "Went to the beach and relaxed. The waves were calming.",
        photo: "https://example.com/photo6.jpg",
        mood: "Calm",
      },
    ],
  };

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

export default DiaryList;
