import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import reactIcon from "../../../assets/react.png";

const ProjectContainer = styled.div`
  display: flex;
  background: white;
`;

const ProjectImage = styled.img`
  width: 25%;
`;

const ProjectInfo = styled.div`
  padding: 12px;
`;

function ProjectPresenter() {
  return (
    <>
      <hr />
      <Container>
        <Row className="mt-5 title">
          <Col>
            <h1 style={{ fontSize: "45px" }}>Project</h1>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col>
            <ProjectContainer>
              <ProjectImage src={reactIcon} />
              <ProjectInfo>test2</ProjectInfo>
            </ProjectContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPresenter;
