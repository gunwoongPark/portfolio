import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdMail, MdCall } from "react-icons/md";
import image from "../../assets/userImg.png";

const Portrait = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 200px;
`;

const ContentContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
`;

const IconContainer = styled.span`
  display: felx;
  justify-content: center;
  align-items: center;
`;

const PhotoContainer = styled.div`
  text-align: center;
  align-self: center;
`;

function About() {
  return (
    <Container>
      <Row className="mt-5 title">
        <Col>
          <h1 style={{ fontSize: "45px" }}>About</h1>
        </Col>
      </Row>

      <Row className="content mt-5">
        <PhotoContainer className="col">
          <Portrait src={image} />
        </PhotoContainer>

        <Col>
          <h2 style={{ fontWeight: "bold" }}>박건웅</h2>
          <h4>Front-End Developer</h4>

          <ContentContainer>
            <li className="Birth" style={{ display: "flex" }}>
              <IconContainer>
                <FaBirthdayCake size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>Birthday :</h5>
                <p style={{ margin: "0" }}>1997.08.07</p>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="Phone" style={{ display: "flex" }}>
              <IconContainer>
                <MdCall size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>Phone :</h5>
                <p style={{ margin: "0" }}>+82 10-5217-5646</p>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="EMail" style={{ display: "flex" }}>
              <IconContainer>
                <MdMail size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>EMail :</h5>
                <p style={{ margin: "0" }}>bung1438@gmail.com</p>
              </div>
            </li>
          </ContentContainer>

          <ContentContainer>
            <li className="GitHub" style={{ display: "flex" }}>
              <IconContainer>
                <SiGithub size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>GitHub :</h5>
                <p style={{ margin: "0" }}>https://github.com/gunwoongPark</p>
              </div>
            </li>
          </ContentContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
