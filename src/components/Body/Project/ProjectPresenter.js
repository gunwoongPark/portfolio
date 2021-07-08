import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import { SiGithub } from "react-icons/si";
import { VscLinkExternal } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectContainer = styled.div`
  text-align: center;
  background: white;
  border-radius: 1rem;

  border: 1px solid #ced4da;
`;

const CarouselContainer = styled.div`
  text-align: -webkit-center;
`;

const CarouselItem = styled.div``;

const ProjectImage = styled.img`
  ${(props) =>
    props.mode === "app"
      ? css`
          height: 500px;
        `
      : css`
          width: 100%;
        `}
`;

const ProjectInfo = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 12px;
`;

const ProjectName = styled.h1`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 26px;
          font-weight: bold;
        `
      : css`
          font-size: 20px;
        `}
`;

const ProjectContents = styled.pre`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
`;

const P = styled.h1`
  font-weight: bold;
  color: #000080;
  display: inline;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #000080;
`;

const LinkBtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkBtn = styled.button`
  color: black;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 1rem;

  &:active {
    filter: brightness(80%);
  }
`;

function ProjectPresenter({ projects, mode }) {
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
      <Container id="Project" style={{ paddingTop: "90px", marginTop: "30px" }}>
        <Row className="mt-5 title">
          <Col>
            <h1 style={{ fontSize: "45px" }}>
              <P>P</P>roject
            </h1>
          </Col>
        </Row>

        {projects.map((project, index) => (
          <Row className="mt-5 mb-5" key={index}>
            <Col>
              <ProjectContainer mode={mode}>
                <CarouselContainer className="mb-3 ">
                  <Slider {...settings}>
                    {project.image.map((img, index) => (
                      <CarouselItem className="mt-3" key={index}>
                        <ProjectImage src={img} mode={project.mode} />
                      </CarouselItem>
                    ))}
                  </Slider>
                </CarouselContainer>

                <ProjectInfo>
                  <ProjectName mode={mode}>{project.name}</ProjectName>
                  <ProjectContents mode={mode}>{project.info}</ProjectContents>
                  <LinkBtnGroup>
                    <a href={project.git} target="__blank">
                      <LinkBtn>
                        <SiGithub size="30" />
                      </LinkBtn>
                    </a>
                    <a href={project.url} target="__blank">
                      <LinkBtn>
                        <VscLinkExternal size="30" />
                      </LinkBtn>
                    </a>
                  </LinkBtnGroup>
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
