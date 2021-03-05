import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import reactIcon from "../../../assets/react.png";

const ProjectContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
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
              <ProjectInfo>
                <h4>프로젝트 이름</h4>
                <p>프로젝트 소개</p>
              </ProjectInfo>
            </ProjectContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPresenter;
