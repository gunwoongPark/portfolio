import React from "react";
import Timeline from "../components/Timeline";

function TimelineContainer({ sidebar, setSidebar }) {
  return <Timeline sidebar={sidebar} setSidebar={setSidebar} />;
}

export default TimelineContainer;
