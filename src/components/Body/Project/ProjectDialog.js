import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import "./modalStyling.css";

const CarouselContainer = styled.div``;
const InfoContainer = styled.div``;

function ProjectDialog(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Body>
        <CarouselContainer></CarouselContainer>
        <InfoContainer>test</InfoContainer>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectDialog;
