import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import jumbImg from "../assets/jumbotron.jpg";
import { useMediaQuery } from "react-responsive";

const JumbotronContainer = styled.div`
  position: relative;
  z-index: auto;
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

const HelloWorld = styled.h1`
  font-size: ${(props) => (props.mode === "isPc" ? "72px" : "48px")};
`;
const Contents = styled.h2`
  font-size: ${(props) => (props.mode === "isPc" ? "56px" : "28px")};
`;

const sparkle = keyframes`
    0% {opacity:1;}
    50%{opacity:0;}
    100%{opacity:1;}
`;

const UnderBar = styled.h2`
  display: inline;
  font-size: ${(props) => (props.mode === "isPc" ? "48px" : "24px")};

  animation-duration: 0.75s;
  animation-name: ${sparkle};
  animation-iteration-count: infinite;
`;

function Home() {
  let [mode, setMode] = useState("");

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <>
      <JumbotronContainer id="Home">
        <Image>
          <div style={{ color: "white" }}>
            <HelloWorld mode={mode}>Hello World!</HelloWorld>
            <Contents mode={mode}>제 이름은 박건웅 입니다.</Contents>
            <Contents mode={mode}>
              저는 프론트 엔드 개발자입니다<UnderBar mode={mode}>_</UnderBar>
            </Contents>
          </div>
        </Image>
      </JumbotronContainer>
    </>
  );
}

export default Home;
