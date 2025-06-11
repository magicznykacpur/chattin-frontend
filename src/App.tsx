import { sendMsg } from "./api";

const App = () => {
  const send = () => {
    console.log("hello");
    sendMsg("hello");
  };

  return (
    <div>
      <button onClick={send}>
        HELLO
      </button>
    </div>
  );
};

export default App;
