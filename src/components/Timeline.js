import React from "react";
import styled from "styled-components";
import { BsArrowBarRight } from "react-icons/bs";
import { ImLab } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const SidebarBlock = styled.div`
  position: fixed;
  top: 0%;
  height: 100%;
  width: 85%;
  background: #e9ecef;
  z-index: 10;
  right: ${(props) => (props.sidebar ? "0%" : "-85%")};
  transition: right 0.5s ease-out;
  overflow-y: auto;
`;

const CloseBtn = styled.button`
  position: fixed;
  z-index: 10;

  top: 50%;
  left: 7.5%;
  transform: translate(-50%, -50%);

  border: none;
  outline: none;

  background: none;
  color: white;

  &:active {
    filter: brightness(85%);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  z-index: ${(props) => (props.sidebar ? "9" : "-1")};
  opacity: ${(props) => (props.sidebar ? "1" : "0")};
  transition: opacity 0.25s ease-out;
`;

function Timeline({ sidebar, setSidebar, timeLine, mode }) {
  return (
    <>
      <DarkBackground sidebar={sidebar} />

      {sidebar ? (
        <CloseBtn onClick={() => setSidebar(false)}>
          <BsArrowBarRight size={mode === "isPc" ? 56 : 42} />
        </CloseBtn>
      ) : null}

      <SidebarBlock sidebar={sidebar}>
        <VerticalTimeline>
          {timeLine.map((el, index) => (
            <VerticalTimelineElement
              date={el.date}
              iconStyle={{ background: " #74c0fc", color: "#fff" }}
              icon={
                el.category === "lab" ? (
                  <ImLab />
                ) : el.category === "mentor" ? (
                  <GiTeacher />
                ) : (
                  <AiOutlineProject />
                )
              }
            >
              <h3>{el.title}</h3>
              <p>{el.content}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </SidebarBlock>
    </>
  );
}

export default Timeline;
