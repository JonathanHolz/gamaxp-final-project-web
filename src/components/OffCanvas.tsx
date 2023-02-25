import React, { useState } from "react";
import styled from "styled-components";

const OffCanvasContainer = styled.div<{ isCanvasOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isCanvasOpen }) => (isCanvasOpen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  z-index: 999;
`;

const Overlay = styled.div<{ isCanvasOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${({ isCanvasOpen }) => (isCanvasOpen ? "1" : "0")};
  visibility: ${({ isCanvasOpen }) => (isCanvasOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  z-index: 998;
`;

interface OffCanvasProps {
    isCanvasOpen: boolean;
  onClose: () => void;
  children: JSX.Element
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isCanvasOpen, onClose, children }) => {
  return (
    <>
      <OffCanvasContainer isCanvasOpen={isCanvasOpen}>
        <button onClick={onClose}>Close</button>
        {children}
      </OffCanvasContainer>
      <Overlay isCanvasOpen={isCanvasOpen} onClick={onClose} />
    </>
  );
};

export default OffCanvas;