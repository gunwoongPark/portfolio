import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import styled from "styled-components";
import reactIcon from "../../../assets/react.png";
import "./modalStyling.css";

const ProjectContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px gray;
    transition-duration: 0.4s;
  }
`;

const ProjectImage = styled.img`
  width: 25%;
`;

const ProjectInfo = styled.div`
  text-align: center;
  place-self: center;
  margin: 0 auto;
  padding: 12px;
`;

function ProjectPresenter(props) {
  return (
    <>
      <hr />

      <Container>
        <Row className="mt-5 title">
          <Col>
            <h1 style={{ fontSize: "45px" }}>Project</h1>
          </Col>
        </Row>

        {props.projects.map((project, index) => (
          <Row className="mt-5 mb-5">
            <Col>
              <ProjectContainer onClick={props.onClick}>
                <ProjectImage src={reactIcon} />
                <ProjectInfo>
                  <h1>{project.name}</h1>
                  <h4>{project.info}</h4>
                </ProjectInfo>
              </ProjectContainer>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default ProjectPresenter;
