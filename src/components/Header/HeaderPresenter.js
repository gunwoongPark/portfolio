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

const LinkBtnContainer = styled.ul`
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

function HeaderPresenter() {
  return (
    <>
      <HeaderContainer>
        <Title>gunwoongPark</Title>
        <LinkBtnContainer>
          <LinkBtn>test</LinkBtn>
          <LinkBtn>test</LinkBtn>
          <LinkBtn>test</LinkBtn>
          <LinkBtn>test</LinkBtn>
        </LinkBtnContainer>
      </HeaderContainer>
    </>
  );
}

export default HeaderPresenter;
