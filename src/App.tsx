import { useEffect, useState } from "react";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/chat-history/chat-history";
import Header from "./components/header/header";

const App = () => {
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  const send = () => {
    sendMsg("hello");
  };

  const wsCallback = (msg: any) => {
    setChatHistory((prev) => [...prev, msg]);
  };

  useEffect(() => {
    connect(wsCallback);
  }, []);

  return (
    <div>
      <Header />
      <ChatHistory messages={chatHistory} />
      <button onClick={send}>HELLO</button>
    </div>
  );
};

export default App;
