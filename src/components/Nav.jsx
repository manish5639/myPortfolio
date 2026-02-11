import React from "react";
import styled from "styled-components";

const FloatingMenu = () => {

  const buttons = [
    { label: "CONTACT", onClick: () => console.log("Contact") },
    { label: "RESUME", onClick: () => console.log("Resume") },
    { label: "GITHUB", onClick: () => console.log("Github") },
  ];

  return (
    <Wrapper>
      {buttons.map((btn, index) => (
        <FloatingButton key={index} onClick={btn.onClick}>
          {btn.label}
        </FloatingButton>
      ))}
    </Wrapper>
  );
};

const FloatingButton = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
      <div className="glow" />
    </button>
  );
};

const Wrapper = styled.div`
  position: fixed;
  right: 40px;
  top: 15%;
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    padding: 2px 8px;
    background:#b57f2f;
    color: #000;
    border: 1px solid #222;
    backdrop-filter: blur(8px);
    cursor: pointer;
    transition: 0.3s;
    letter-spacing: 2px;
    border-radius: 30px;
    position: relative;
  }

  
`;

export default FloatingMenu;
