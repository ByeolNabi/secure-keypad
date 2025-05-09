import { useState } from "react";
import "./App.css";
import VirtualKeyboard from "./components/SecureKeyboard";

const App: React.FC = () => {
  const [txt, setTxt] = useState<string>("");

  return (
    <>
      <input type="text" value={txt} />
      <VirtualKeyboard mode={1} setInputVal={setTxt} />
    </>
  );
};

export default App;
// 외부 키보드 컴포넌트에서 input에 값을 입력하는 방법은...?
// txt를 input의 value에 넣고 setTxt를 가상키보드에 연결해봤다
// -> setTxt로 값을 바꾸면 txt가 있는 APP을 리랜더링 한다. keyboard가 먹통이 된다.
// -> 위 문제가 아니라 event 관련 문제였음
