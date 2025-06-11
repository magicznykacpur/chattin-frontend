import styled from "styled-components";
import Message, { WebSocketMessage } from "./message";

const ChatHistory = ({ messages }: { messages: WebSocketMessage[] }) => {
  return (
    <HistoryContainer>
      {messages.length === 0 && (
        <NoMessages>
          <h2>No messages in chat yet...</h2>
        </NoMessages>
      )}
      {messages.length >= 1 && messages.map((msg) => <Message msg={msg} />)}
    </HistoryContainer>
  );
};

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 700px;
  overflow-y: scroll;
`;

const NoMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default ChatHistory;
