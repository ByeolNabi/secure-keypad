import React, { useState } from "react";
import "./SecureKeyboard.css";

type VirtualKeyboardProps = {
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
};

// const KEYBOARD_tmp: Array<Array<string>> = [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "],
//   ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", " "],
//   ["a", "s", "d", "f", "g", "h", "j", "k", "l", " "],
//   ["⇧", "z", "x", "c", "v", "b", "n", "m", " ", " ", "⌫"],
//   ["한/영", "↺", "↵"],
// ];

// const KEYBOARD: Array<Array<string>> = [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
//   ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
//   ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
//   ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
//   ["한/영", "↺", "↵"],
// ];

const suffle = (keyboard: Array<Array<string>>) => {
  keyboard[0].splice(Math.floor(Math.random() * 11), 0, " ");
  keyboard[1].splice(Math.floor(Math.random() * 11), 0, " ");
  keyboard[2].splice(Math.floor(Math.random() * 11), 0, " ");
  keyboard[2].splice(Math.floor(Math.random() * 12), 0, " ");
  keyboard[3].splice(Math.floor(Math.random() * 8 + 1), 0, " ");
};

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ setInputVal }) => {
  const [mode, setMode] = useState<number>(0);
  const KEYBOARD_lower: Array<Array<string>> = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
    ["↺", "Space", "↵"],
  ];
  const KEYBOARD_upper: Array<Array<string>> = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["⇧", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
    ["↺", "Space", "↵"],
  ];
  let keyboardDatas = [[""]];
  if (mode == 0) {
    keyboardDatas = KEYBOARD_lower;
  } else if (mode == 1) {
    keyboardDatas = KEYBOARD_upper;
  }
  suffle(keyboardDatas);

  const keyClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // console.log("[keyClick] : start");
    const char = e.currentTarget.textContent;
    if (char == " ") {
      return;
    } else if (char == "⇧") {
      setMode((prev) => (prev == 0 ? 1 : 0));
    } else if (char == "↺") {
      setInputVal((_) => " ");
    } else if (char == "⌫") {
      setInputVal((prev) => {
        if (prev == "") return "";
        else return prev.slice(0, -1);
      });
    } else if (char == "Space") {
      setInputVal((prev) => prev + " ");
    } else if (char == "↵") {
      return;
    } else {
      setInputVal((prev) => {
        // console.log("[setInputVal] in keyClick : start!");
        return prev + char;
      });
    }
    // console.log("[keyClick] : end");
  };

  return (
    <>
      <div className="container">
        {keyboardDatas.map((charList, row) => {
          return charList.map((char, col) => (
            <div key={row * 11 + col} className="item" onClick={keyClick}>
              {char}
            </div>
          ));
        })}
      </div>
    </>
  );
};

export default VirtualKeyboard;
