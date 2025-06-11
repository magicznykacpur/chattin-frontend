import styled from "styled-components";

const ChatInput = ({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (msg: string) => void;
}) => {
  return (
    <ChatInputContainer>
      <label>Write your message</label>
      <StyledTextArea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={5}
      ></StyledTextArea>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bolder;
  }
`;

const StyledTextArea = styled.textarea`
  background-color: #dddddd;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-style: none;
  border-radius: 0.5rem;
`;

export default ChatInput;
