import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

function User(props) {
  return (
    <div className="title-box">
      <div>{props.uTitle.title}</div>
      <div>{props.uTitle.innerText}</div>
      <div>
        <button
          onClick={() => {
            props.deleteContent(props.uTitle.id);
          }}
        >
          삭제허기
        </button>
        <button>완료</button>
      </div>
    </div>
  );
}
const App = () => {
  const [uTitles, setUTitles] = useState([
    { id: 1, title: "리액트 공부허기", innerText: "넘 어려움", check: false },
  ]);
  const [stitle, setStitle] = useState("");
  const [stext, setStext] = useState("");
  const [scheck, setscheck] = useState("");
  const addHandler = () => {
    const newContent = {
      id: uTitles.length + 1,
      title: stitle,
      innerText: stext,
      check: false,
    };
    setUTitles([...uTitles, newContent]);
  };
  const deleteContent = (id) => {
    const newContentList = uTitles.filter((uTitle) => uTitle.id != id);
    setUTitles(newContentList);
  };
  return (
    <div className="app-Style">
      <label>제목 </label>
      <input value={stitle} onChange={(e) => setStitle(e.target.value)} />
      <label>내용 </label>
      <input value={stext} onChange={(e) => setStext(e.target.value)} />
      <button onClick={addHandler}>추가허기</button>
      <h2>완료전</h2>
      {uTitles.map((uTitle) => {
        if (uTitle.check == false) {
          return (
            <User
              deleteContent={deleteContent}
              uTitle={uTitle}
              key={uTitle.id}
            ></User>
          );
        }
      })}
      <h2>완료후</h2>
      {uTitles.map((uTitle) => {
        if (uTitle.check == true) {
          return (
            <User
              deleteContent={deleteContent}
              uTitle={uTitle}
              key={uTitle.id}
            ></User>
          );
        }
      })}
    </div>
  );
};
export default App;
