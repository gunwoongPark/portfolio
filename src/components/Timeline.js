import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const Container = styled.div`
  position: fixed;
  top: 0%;
  text-align: right;
  height: 100%;
  width: 85%;
  background: white;
  z-index: 10;

  right: ${(props) => (props.sidebar ? "0%" : "-85%")};

  transition: right 0.5s ease-out;
`;

const CloseBtn = styled.button`
  float: left;
  margin: 0.5rem 0 0 0.5rem;
  border: none;
  outline: none;
  background: white;
  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }
`;

function Timeline({ sidebar, setSidebar }) {
  return (
    <Container sidebar={sidebar}>
      <CloseBtn onClick={() => setSidebar(false)}>
        <GrClose size="30" />
      </CloseBtn>
    </Container>
  );
}

export default Timeline;
