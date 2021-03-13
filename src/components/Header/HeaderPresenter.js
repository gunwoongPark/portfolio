import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: white;
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 10;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-left: 50px;
`;

const LinkContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 50px 0 0;
`;

const LinkBtn = styled.li`
  cursor: pointer;
  padding: 10px;
  margin-left: 20px;
  font-size: 20px;
`;

const LinkItem = styled.a`
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

function HeaderPresenter() {
  return (
    <>
      <HeaderContainer>
        <Title>gunwoongPark</Title>
        <LinkContainer>
          <LinkBtn>
            <LinkItem href="#About">About</LinkItem>
          </LinkBtn>
          <LinkBtn>
            <LinkItem href="#Skills">Skills</LinkItem>
          </LinkBtn>
          <LinkBtn>
            <LinkItem href="#Project">Project</LinkItem>
          </LinkBtn>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
}

export default HeaderPresenter;
