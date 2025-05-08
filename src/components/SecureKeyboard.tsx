import React, { useEffect, useState } from "react";
import "./SecureKeyboard.css";

type VirtualKeyboardProps = {
  mode: number;
};

const KEYBOARD_tmp: Array<Array<string>> = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", " "],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", " "],
  ["⇧", "z", "x", "c", "v", "b", "n", "m", " ", " ", "⌫"],
  ["한/영", "↺", "↵"],
];

const KEYBOARD: Array<Array<string>> = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
  ["한/영", "↺", "↵"],
];

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ mode }) => {
  const [keyBoardDatas, setKeyBoardDatas] =
    useState<Array<Array<string>>>(KEYBOARD_tmp); // " "문자가 없을 때 레이아웃이 무너짐으로 tmp를 초기값으로 한다.

  useEffect(() => {
    setKeyBoardDatas((_) => {
      let tmp = [...KEYBOARD];
      tmp[0].splice(Math.floor(Math.random() * 11), 0, " ");
      tmp[1].splice(Math.floor(Math.random() * 11), 0, " ");
      tmp[2].splice(Math.floor(Math.random() * 11), 0, " ");
      tmp[2].splice(Math.floor(Math.random() * 12), 0, " ");
      tmp[3].splice(Math.floor(Math.random() * 8 + 1), 0, " ");
      return tmp;
    });
  }, []);

  return (
    <>
      <div>this keyboard is {mode}</div>
      <div className="container">
        {keyBoardDatas.map((charList, row) => {
          return charList.map((char, col) => (
            <div key={row * 11 + col} className="item">
              {char}
            </div>
          ));
        })}
      </div>
    </>
  );
};

export default VirtualKeyboard;
