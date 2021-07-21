import React from "react";
import styled, { css } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import TimelineContainer from "../container/TimelineContainer";

const HeaderContainer = styled.div`
  background: white;
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      padding: 10px 0 10px 0;
    `}

  ${(props) =>
    props.pos &&
    css`
      box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.3s ease-in;
    `}
`;

const Title = styled.h1`
  font-size: 24px;
  z-index: 1;
  margin-left: ${(props) => (props.mode === "isMobile" ? "25px" : "50px")};
`;

const P = styled.h1`
  display: inline;
  font-size: 24px;
  z-index: 1;
  color: #000080;
  text-decoration: underline;
  text-decoration-color: #000080;
  font-weight: bold;
`;

const LinkContainer = styled.ul`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0 1rem 0 0;
        `
      : css`
          padding-left: 0;
          text-align: center;
          display: block;
          position: absolute;
          top: ${(props) => (props.open ? "100% " : "-820%")};
          transition: top 0.3s ease-in;

          width: 100%;
          background: white;
          text-align: -webkit-center;
          z-index: -1;
        `};
`;

const TimelineBtn = styled.button`
  margin-left: 1rem;
  color: black;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;

  &:active {
    filter: brightness(80%);
  }
`;

const HamburgerBtn = styled.button`
  display: none;

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      display: flex;
      border-radius: 8px;
      background: white;
      margin-right: 1rem;
      z-index: 1;
      border: none;

      &:active {
        filter: brightness(80%);
      }
    `}
`;

const LinkBtn = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem;

  font-size: 20px;
  ${(props) =>
    props.mode === "isPc" &&
    css`
      & + & {
        margin-left: 20px;
      }
      border-bottom: 3px solid
        ${(props) => (props.current ? "#000080" : "white")};

      transition: border-bottom 0.2s ease-in;
    `}

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      background: white;
      margin: 1rem 0 1rem 0;

      width: 75%;
      border-radius: 1rem;

      &:active {
        filter: brightness(80%);
      }
    `}
`;

const LinkItem = styled.a`
  color: black;
  display: block;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const Cover = styled.div`
  ${(props) =>
    props.mode === "isMobile" &&
    css`
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      z-index: 0;
    `}
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  z-index: ${(props) => (props.sidebar ? "9" : "-1")};
  opacity: ${(props) => (props.sidebar ? "1" : "0")};
  transition: opacity 0.5s ease-out;
`;

function HeaderPresenter({
  Home,
  About,
  Skills,
  Project,
  pos,
  mode,
  open,
  toggleHamburger,
  sidebar,
  setSidebar,
}) {
  return (
    <>
      <TimelineContainer sidebar={sidebar} setSidebar={setSidebar} />

      <HeaderContainer pos={pos} mode={mode}>
        <Title mode={mode}>
          gunwoong<P>P</P>ark
        </Title>

        <HamburgerBtn mode={mode} onClick={toggleHamburger}>
          {!open ? <GiHamburgerMenu size="24" /> : <GrClose size="24" />}
        </HamburgerBtn>

        <Cover mode={mode} />

        <LinkContainer mode={mode} open={open}>
          <LinkBtn mode={mode} current={pos <= Home.bottom}>
            <LinkItem href="#Home">Home</LinkItem>
          </LinkBtn>
          <LinkBtn
            mode={mode}
            current={pos >= About.top && pos <= About.bottom}
          >
            <LinkItem href="#About">About</LinkItem>
          </LinkBtn>
          <LinkBtn
            mode={mode}
            current={pos >= Skills.top && pos <= Skills.bottom}
          >
            <LinkItem href="#Skills">Skills</LinkItem>
          </LinkBtn>
          <LinkBtn mode={mode} current={pos >= Project.top}>
            <LinkItem href="#Project">Project</LinkItem>
          </LinkBtn>

          <TimelineBtn onClick={() => setSidebar(true)}>
            <MdTimeline size="30" />
          </TimelineBtn>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
}

export default HeaderPresenter;
