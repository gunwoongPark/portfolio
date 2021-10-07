import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import { SiGithub } from "react-icons/si";
import { VscLinkExternal } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

function ProjectPresenter ({ projects, mode }) {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [screen, setScreen] = useState("");

  useEffect(() => {
    if (isPc) setScreen("isPc");
    else if (isMobile) setScreen("isMobile");
  }, [isMobile, isPc])

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
      <CustomContainer id="Project">
        <Row className="mt-5 title">
          <Col>
            <Title data-aos="fade-right" screen={screen}>
              <P>P</P>roject
            </Title>
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


                  <RoleContainer mode={mode}>
                    {project.role.map((role, index) => (
                      <ProjectRole key={index} mode={mode}>
                        {role}
                      </ProjectRole>
                    ))}
                  </RoleContainer>

                  <TagContainer mode={mode}>
                    {project.tag.map((tag, index) => (
                      <ProjectTag key={index} mode={mode}>
                        {tag}
                      </ProjectTag>
                    ))}
                  </TagContainer>

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
      </CustomContainer>
    </>
  );
}

const CustomContainer = styled(Container)`
  padding-top: 90px;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size:45px;
  ${(props) => props.screen === "isPc" ? css`` : css`text-align:center`}
`

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
  overflow: hidden;
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
  white-space: pre-wrap;
  margin-bottom:2.5rem;
`;

const RoleContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom:2.5rem;

  &::before{
    ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
        content:'Role :';
        margin-right:0.5rem;
        font-weight: bold;
  }
`

const ProjectRole = styled.p`
   ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
  background:#e9ecef;
  border-radius: 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
  white-space: nowrap;
  display: inline-block;
  margin-bottom:0;

  & + & {
    margin-left: 1rem;
  }

  font-weight: bold;
`

const TagContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
  margin-bottom:2.5rem;
  align-items:center;

  &::before{
    ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
        content:'Stack :';
        margin-right:0.5rem;
        font-weight: bold;
  }
`

const ProjectTag = styled.p`
  ${(props) =>
    props.mode === "isPc"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 15px;
        `}
  background:#e9ecef;
  border-radius: 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
  white-space: nowrap;
  display: inline-block;
  margin:0.5rem;
  font-weight: bold;
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

export default ProjectPresenter;
