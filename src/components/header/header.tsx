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
  box-shadow: -4px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -4px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 2px 11px 0px rgba(0, 0, 0, 0.75);
`;

export default Header;
