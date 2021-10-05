import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

type Props = {
  children?: JSX.Element;
  isOpen: boolean;
  onClose: () => unknown;
  width?: string;
};

export function Modal(props: Props) {
  const root = document.getElementById("root");

  return ReactDOM.createPortal(
    <Backdrop visible={props.isOpen} onClick={props.onClose}>
      <Container
        width={props.width}
        visible={props.isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </Container>
    </Backdrop>,
    root || document.body
  );
}

type BackdropProps = {
  visible: boolean;
};

const Backdrop = styled.div<BackdropProps>`
  display: ${(props) => {
    return props.visible ? "flex" : "none";
  }};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

type StyleProps = {
  visible: boolean;
  width?: string;
};
const Container = styled.div<StyleProps>`
  display: ${(props) => {
    return props.visible ? "block" : "none";
  }};
  position: relative;
  width: ${(props) => {
    return props.width ? props.width : "60%";
  }};
  background: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 2;

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
