import React, { useEffect, useState } from "react";
import "./SecureKeyboard.css";

type VirtualKeyboardProps = {
  mode: number;
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

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  mode,
  setInputVal,
}) => {
  const KEYBOARD: Array<Array<string>> = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
    ["한/영", "↺", "↵"],
  ];
  let keyBoardDatas = KEYBOARD;
  keyBoardDatas[0].splice(Math.floor(Math.random() * 11), 0, " ");
  keyBoardDatas[1].splice(Math.floor(Math.random() * 11), 0, " ");
  keyBoardDatas[2].splice(Math.floor(Math.random() * 11), 0, " ");
  keyBoardDatas[2].splice(Math.floor(Math.random() * 12), 0, " ");
  keyBoardDatas[3].splice(Math.floor(Math.random() * 8 + 1), 0, " ");

  const keyClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("[keyClick] : start");
    const char = e.currentTarget.textContent;
    setInputVal((prev) => {
      console.log("[setInputVal] in keyClick : start!");
      return prev + char;
    });
    console.log("[keyClick] : end");
  };

  return (
    <>
      <div>this keyboard is {mode}</div>
      <div className="container">
        {keyBoardDatas.map((charList, row) => {
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
