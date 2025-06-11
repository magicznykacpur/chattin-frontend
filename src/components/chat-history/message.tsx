import styled from "styled-components";

export type WebSocketMessage = {
  isTrusted: boolean;
  bubbles: boolean;
  cancelBubble: boolean;
  composed: false;
  currentTarget: WebSocket;
  data: string;
  defaultPrevented: boolean;
  eventPhase: number;
  lastEventId: string;
  origin: string;
  ports: [];
  returnValue: boolean;
  source: WebSocket;
  srcElement: WebSocket;
  target: WebSocket;
  timeStamp: number;
  type: string;
};

const Message = ({ msg }: { msg: WebSocketMessage }) => {
  return (
    <MessageContainer>
      {`{ ts: ${msg.timeStamp}, data: ${msg.data}, origin: ${msg.origin} }`}
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
  border-radius: 0.5rem;
`;

export default Message;
