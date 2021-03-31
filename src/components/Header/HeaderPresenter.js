import React from "react";
import styled, { css } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const HeaderContainer = styled.div`
  background: white;
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;

  ${(props) => props.pos && css`
    
  `}
`;

const Title = styled.h1`
  font-size: 24px;
  z-index: 1;
  margin-left: ${(props) => (props.mode === "isMobile" ? "25px" : "50px")};
`;

const LinkContainer = styled.ul`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          display: flex;
          list-style: none;
          margin: 0 50px 0 0;
        `
      : css`
          padding-left: 0;
          text-align: center;
          display: block;
          position: absolute;
          top: ${(props) => (props.open ? "100% " : "-700%")};
          transition: top 0.3s ease-in;

          width: 100%;
          background: white;
          text-align: -webkit-center;
          z-index: -1;
        `};
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

      &:hover {
        filter: brightness(120%);
      }

      &:active {
        filter: brightness(80%);
      }
    `}
`;

const LinkBtn = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  ${(props) =>
    props.mode === "isPc" &&
    css`
      margin-left: 20px;
      border-bottom: 3px solid ${(props) => (props.current ? "black" : "white")};
      transition: border-bottom 0.2s ease-in;
    `}

  ${(props) =>
    props.mode === "isMobile" &&
    css`
      background: white;
      margin: 1rem 0 1rem 0;

      width: 75%;
      border-radius: 1rem;

      &:hover {
        filter: brightness(120%);
      }

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

function HeaderPresenter({
  Home,
  About,
  Skills,
  Project,
  pos,
  mode,
  open,
  toggleHamburger,
}) {
  return (
    <>
      <HeaderContainer pos={pos}>
        <Title mode={mode}>gunwoongPark</Title>

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
        </LinkContainer>
      </HeaderContainer>
    </>
  );
}

export default HeaderPresenter;
