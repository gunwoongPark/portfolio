import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SkillContainer = styled.div`
  width: 86px;
  height: auto;
`;

function SkillsPresenter({ skills }) {
  return (
    <>
      <hr />
      <Container>
        <Row className="mt-5 title">
          <Col>
            <h1 style={{ fontSize: "45px" }}>Skills</h1>
          </Col>
        </Row>

        <Row className="mt-5">
          {skills.map((skill, index) => (
            <Col md={2} sm={3} xs={4}>
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
