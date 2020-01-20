import styled from "styled-components";

interface linkProps {
  left?: string;
  //top?: string
}

export default styled.div`
  ${({ left }: linkProps) => left && `margin-left: ${left}`};
  display: inline-block;
  ${({ theme }) => theme && theme.colors && `color: ${theme.colors.blue};`}
  //theme.colors && theme.colors.blue && 
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
