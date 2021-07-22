import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { MdMail, MdCall } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import image from "../../assets/myphoto.jpg";

const Portrait = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 300px;
`;

const ContentContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
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

const A = styled.h1`
  font-weight: bold;
  color: #000080;
  display: inline;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #000080;
`;

const Anchor = styled.a`
  margin: 0;
  font-size: 17px;
  color: black;

  &:hover {
    color: black;
  }
`;

function About() {
  return (
    <Container
      id="About"
      style={{ paddingTop: "90px", marginTop: "30px", paddingBottom: "70px" }}
    >
      <Row className="mt-5 title">
        <Col>
          <h1 style={{ fontSize: "45px" }}>
            <A>A</A>bout
          </h1>
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
            <li className="University" style={{ display: "flex" }}>
              <IconContainer>
                <FaUniversity size="30" />
              </IconContainer>
              <div style={{ marginLeft: "24px" }}>
                <h5 style={{ margin: "0" }}>University / Department :</h5>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://www.kumoh.ac.kr/ko/index.do"
                  target="__blank"
                >
                  금오공과대학교
                </Anchor>
                <p style={{ display: 'inline', fontSize: '17px' }}> / </p>
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://ce.kumoh.ac.kr/ce/index.do"
                  target="__blank"
                >
                  컴퓨터공학과
                </Anchor>
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
                <Anchor
                  href="mailto:bung1438@gmail.com"
                  style={{ margin: "0", fontSize: "17px" }}
                >
                  bung1438@gmail.com
                </Anchor>
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
                <Anchor
                  style={{ margin: "0", fontSize: "17px" }}
                  href="https://github.com/gunwoongPark"
                  target="__blank"
                >
                  https://github.com/gunwoongPark
                </Anchor>
              </div>
            </li>
          </ContentContainer>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col style={{ textAlign: "center" }}>
          <IntroduceText>
            눈앞에 보이는 웹을 구현하는 것에 흥미를 느껴 프론트 엔드 개발자가
            되기 위해 노력하는 대학생입니다.
            <br />
            빠르게 변화하는 트렌드와 발전하는 기술에 적응하는 더 좋은 개발자가
            되기 위해 노력하고 있습니다.
            <br />
            열정과 끈기가 있는 개발자입니다. 저에 대해 궁금하신 점이 있다면,
            위의 주소로 연락해주세요!
          </IntroduceText>
        </Col>
      </Row>
    </Container>
  );
}

export default About;