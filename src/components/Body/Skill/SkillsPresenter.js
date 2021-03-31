import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

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
`;

function SkillsPresenter({ skills }) {
  return (
    <>
      <hr />
      <Container
        id="Skills"
        style={{
          paddingTop: "120px",
          paddingBottom: "70px",
        }}
      >
        <Row className="mt-5 title">
          <Col>
            <h1 style={{ fontSize: "45px" }}>
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
                <h5 className="mt-2" style={{ textAlign: "center" }}>
                  {skills[index].name}
                </h5>
              </SkillContainer>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SkillsPresenter;
