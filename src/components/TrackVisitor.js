import React, { useEffect } from "react";
import { socket } from "../socket";
import { useLocation } from "react-router";

const TrackVisitor = () => {
  const location = useLocation()

  // track visitor
  useEffect(() => {
    socket.emit("visitor", window.location.href)
  }, [location])

  return (<></>);
};

export default TrackVisitor;
