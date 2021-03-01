import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: #212529;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  padding: 25px;
`;

function Footer() {
  return <FooterContainer>© 2021 Copyright gunwoongPark</FooterContainer>;
}

export default Footer;
