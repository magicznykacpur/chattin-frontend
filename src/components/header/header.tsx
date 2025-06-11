import styled from "styled-components";

const Header = () => {
  return <StyledHeader>chattin</StyledHeader>;
};

const StyledHeader = styled.header`
  display: flex;
  justify-items: flex-start;
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: bolder;
`;

export default Header;
