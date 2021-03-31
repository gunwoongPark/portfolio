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

const IntroduceText = styled.p`
  text-align: center;
  font-size: 20px;
`;

function About() {
  return (
    <Container
      id="About"
      style={{ paddingTop: "120px", paddingBottom: "70px" }}
    >
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
                <p style={{ margin: "0", fontSize: "17px" }}>1997.08.07</p>
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
                <p style={{ margin: "0", fontSize: "17px" }}>
                  +82 10-5217-5646
                </p>
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
                <p style={{ margin: "0", fontSize: "17px" }}>
                  bung1438@gmail.com
                </p>
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
                <p style={{ margin: "0", fontSize: "17px" }}>
                  https://github.com/gunwoongPark
                </p>
              </div>
            </li>
          </ContentContainer>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col style={{ textAlign: "center" }}>
          <IntroduceText>
            안녕하세요.
            <br />
            코딩을 통해 웹을 그리는 것에 재미를 느껴 프론트엔드 개발자의 길을
            걸었습니다.
            <br />
            발전하는 기술의 흐름 속에서, 그것에 적응하고 더 좋은 개발자가 되고
            싶어 달려가고 있습니다.
            <br />
            자신의 일을 좋아하는 열정있는 개발자 입니다! 저에 대해 궁금하신 점이
            있다면, 위의 주소로 연락주세요!
          </IntroduceText>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
