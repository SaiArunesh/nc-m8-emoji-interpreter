import "./App.css";

import { useState } from "react";

const emojiMap = {
  "đ«": "Dizzy",
  "đȘ": "Camel",
  "đ«": "Two-hump Camel",
  "â": "Shamrock",
  "đ„": "Croissant",
  "đđ»": "Vulcan Salute",
  "đđœââïž" : "Woman Gesturing OK",
  "đ" : "Grinning Face",
  "đ§ââïž":"Man in Steamy Room",
  "đŠčđŸââïž":"Man Supervillain"

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
