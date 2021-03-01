import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import reactIcon from "../../../assets/react.png";
import bootstrapIcon from "../../../assets/bootstrap.svg";
import vueIcon from "../../../assets/vue.png";
import htmlIcon from "../../../assets/html.png";
import cssIcon from "../../../assets/css.png";
import jsIcon from "../../../assets/js.png";
import vuetifyIcon from "../../../assets/vuetify.svg";

const SkillContainer = styled.div`
  width: 86px;
  height: auto;
`;

function SkillsPresenter() {
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
          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={htmlIcon} alt="html" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                HTML
              </h5>
            </SkillContainer>
          </Col>

          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={cssIcon} alt="css" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                CSS
              </h5>
            </SkillContainer>
          </Col>

          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={jsIcon} alt="js" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                JavaScript
              </h5>
            </SkillContainer>
          </Col>

          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={vueIcon} alt="vue" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                Vue
              </h5>
            </SkillContainer>
          </Col>

          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={vuetifyIcon} alt="vuetify" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                Vuetify
              </h5>
            </SkillContainer>
          </Col>

          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={reactIcon} alt="react" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                React
              </h5>
            </SkillContainer>
          </Col>

          <Col md={2} sm={3} xs={4}>
            <SkillContainer>
              <img src={bootstrapIcon} alt="bootstrap" width="100%"></img>
              <h5 className="mt-2" style={{ textAlign: "center" }}>
                Bootstrap
              </h5>
            </SkillContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SkillsPresenter;
