import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectContainer = styled.div`
  text-align: center;
  background: white;
  border-radius: 1rem;

  &:hover {
    box-shadow: 10px 10px 10px gray;
    transition-duration: 0.4s;
  }
`;

const CarouselContainer = styled.div`
  text-align: -webkit-center;
`;

const CarouselItem = styled.div``;

const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectInfo = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 12px;
`;

function ProjectPresenter(props) {
  let settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <>
      <hr />

      <Container id="Project" style={{ marginTop: "120px" }}>
        <Row className="mt-5 title">
          <Col>
            <h1 style={{ fontSize: "45px" }}>Project</h1>
          </Col>
        </Row>

        {props.projects.map((project, index) => (
          <Row className="mt-5 mb-5" key={index}>
            <Col>
              <ProjectContainer>
                <CarouselContainer className="mb-3 ">
                  <Slider {...settings}>
                    {project.image.map((img, index) => (
                      <CarouselItem className="mt-3" key={index}>
                        <ProjectImage src={img} />
                      </CarouselItem>
                    ))}
                  </Slider>
                </CarouselContainer>

                <ProjectInfo>
                  <h2>{project.name}</h2>
                  <h5>{project.info}</h5>
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
