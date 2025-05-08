import "./App.css";
import VirtualKeyboard from "./components/SecureKeyboard";

const App: React.FC = () => {
  return (
    <>
      <VirtualKeyboard mode={1} />
    </>
  );
};

export default App;
