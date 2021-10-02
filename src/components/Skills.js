import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const CustomContainer = styled(Container)`
  padding-top: 90px;
  margin-top: 30px;
  padding-bottom: 70px;
`;

const SkillContainer = styled.div`
  width: 86px;
  height: auto;
`;

const S = styled.h1`
  color: #000080;
  display: inline;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #000080;
  font-weight: bold;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function SkillsPresenter ({ skills }) {
  return (
    <>
      <hr />
      <CustomContainer id="Skills">
        <Row className="mt-5 title">
          <Col>
            <h1 data-aos="fade-right" style={{ fontSize: "45px" }}>
              <S>S</S>kills
            </h1>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          {skills.map((skill, index) => (
            <Col md={2} sm={3} xs={4} key={index}>
              <SkillContainer>
                <img
                  src={skills[index].icon}
                  alt={skills[index].name}
                  width="100%"
                ></img>
                <NameContainer>
                  <h5 className="mt-2" style={{ textAlign: "center" }}>
                    {skills[index].name}
                  </h5>
                </NameContainer>
              </SkillContainer>
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </>
  );
}

export default SkillsPresenter;
