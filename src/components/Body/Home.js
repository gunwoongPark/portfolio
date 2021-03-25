import React from "react";
import styled, { keyframes } from "styled-components";
import jumbImg from "../../assets/jumbotron.jpg";

const JumbotronContainer = styled.div`
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-image: url(${jumbImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const sparkle = keyframes`
    0% {opacity:1;}
    50%{opacity:0;}
    100%{opacity:1;}
`;

const UnderBar = styled.h2`
  display: inline;
  font-size: 48px;

  animation-duration: 0.75s;
  animation-name: ${sparkle};
  animation-iteration-count: infinite;
`;

function Home() {
  return (
    <>
      <JumbotronContainer id="Home">
        <Image>
          <div style={{ color: "white" }}>
            <h1 style={{ fontSize: "72px" }}>Hello World!</h1>
            <h2 style={{ fontSize: "56px" }}>제 이름은 박건웅 입니다.</h2>
            <h2 style={{ fontSize: "56px" }}>
              저는 프론트엔드 개발자입니다<UnderBar>_</UnderBar>
            </h2>
          </div>
        </Image>
      </JumbotronContainer>
    </>
  );
}

export default Home;
