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
  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(msg.timeStamp * 1e3));

  const formattedMsg = msg.data.split(`"body":"`)[1].split(`"}`)[0]

  return (
    <MessageContainer>
      {`${formattedMsg}`}
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: -4px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -4px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 2px 11px 0px rgba(0, 0, 0, 0.75);
`;

export default Message;
