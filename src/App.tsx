import { useEffect, useState } from "react";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/chat-history/chat-history";
import Header from "./components/header/header";
import ChatInput from "./components/chat-input/chat-input";
import styled from "styled-components";

const App = () => {
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");

  const send = () => {
    sendMsg(message);
    setMessage("")
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
      <ChatInput message={message} setMessage={setMessage} />
      <Button onClick={send}>Send message</Button>
    </div>
  );
};

const Button = styled.button`
  margin-left: 1rem;
`

export default App;
