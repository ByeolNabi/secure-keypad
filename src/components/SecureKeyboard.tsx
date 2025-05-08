import React, { useEffect, useState } from "react";
import "./SecureKeyboard.css";

type VirtualKeyboardProps = {
  mode: number;
};

const KEYBOARD: Array<Array<string>> = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
  ["한/영", "↺", "↵"],
];

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ mode }) => {
  const [keyBoardDatas, setKeyBoardDatas] =
    useState<Array<Array<string>>>(KEYBOARD);

  // 첫 랜더링에서 공백 문제를 랜덤하게 넣자.
  useEffect(() => {
    setKeyBoardDatas(KEYBOARD);
    keyBoardDatas[0].splice(Math.floor(Math.random() * 11), 0, " ");
    keyBoardDatas[1].splice(Math.floor(Math.random() * 11), 0, " ");
    keyBoardDatas[2].splice(Math.floor(Math.random() * 11), 0, " ");
    keyBoardDatas[2].splice(Math.floor(Math.random() * 12), 0, " ");
    keyBoardDatas[3].splice(Math.floor(Math.random() * 8 + 1), 0, " ");
    setKeyBoardDatas(keyBoardDatas);
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
