import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import reactIcon from "../../../assets/react.png";
import "./modalStyling.css";
import Slider from "react-slick";

const ProjectContainer = styled.div`
  text-align: center;
  background: white;
  border-radius: 1rem;

  &:hover {
    box-shadow: 10px 10px 10px gray;
    transition-duration: 0.4s;
  }
`;

const CarouselContainer = styled.div``;

const ProjectImage = styled.img`
  width: 25%;
`;

const ProjectInfo = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 12px;
`;

function ProjectPresenter(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
                <CarouselContainer>
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                  </Slider>
                  {/* <ProjectImage src={reactIcon} /> */}
                </CarouselContainer>

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
