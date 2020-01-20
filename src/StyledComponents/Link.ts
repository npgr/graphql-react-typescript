import styled from "styled-components";

interface linkProps {
  left?: string;
}

export default styled.div`
  ${({ left }: linkProps) => left && `margin-left: ${left}`};
  display: inline-block;
  color: #4183c4;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
