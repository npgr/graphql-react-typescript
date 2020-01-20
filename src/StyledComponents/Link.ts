import styled from "styled-components";

interface linkProps {
  left?: string;
  //top?: string
}

export default styled.div<linkProps>`
  ${({ left }) => left && `margin-left: ${left}`};
  display: inline-block;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
