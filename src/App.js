import "./App.css";

import { useState } from "react";

const emojiMap = {
  "💫": "Dizzy",
  "🐪": "Camel",
  "🐫": "Two-hump Camel",
  "☘": "Shamrock",
  "🥐": "Croissant",
};

const emojiKeys = Object.keys(emojiMap);

export default function App() {
  const [inputEmoji, setTranslation] = useState("Please type in");

  function clickEmojiHandler(item) {
    setTranslation(emojiMap[item]);
  }

  function inputChangeHandler(event) {
    console.log(emojiMap[event.target.value]);
    if (event.target.value !== "") {
      if (event.target.value in emojiMap) {
        setTranslation(emojiMap[event.target.value]);
      } else {
        setTranslation("Not Available right now");
      }
    } else {
      setTranslation("Please type in");
    }
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input type="text" onChange={inputChangeHandler}></input>
      <p>{inputEmoji}</p>
      <ul className="available-emojis">
        {emojiKeys.map((item, index) => {
          return (
            <li
              key={index}
              style={{ cursor: "pointer", padding: "20px" }}
              onClick={() => clickEmojiHandler(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
