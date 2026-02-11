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
  z-index: 999;
  display: flex;
  gap: 20px;

  /* 🖥 Desktop Layout */
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;

  /* 📱 Mobile Layout */
  @media (max-width: 768px) {
    bottom: 20px;
    top: auto;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    flex-direction: row;
    gap: 12px;
  }

  button {
    padding: 10px 18px;
    background: linear-gradient(
      145deg,
      rgba(181, 127, 47, 0.25),
      rgba(181, 127, 47, 0.15)
    );
    color: #e6c27a;
    border: 1px solid rgba(181, 127, 47, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 2px;
    border-radius: 40px;
    font-weight: 600;
    position: relative;
    overflow: hidden;

    box-shadow:
      inset 0 0 10px rgba(181, 127, 47, 0.3),
      0 0 15px rgba(181, 127, 47, 0.2);
  }

  /* Smaller buttons on mobile */
  @media (max-width: 768px) {
    button {
      padding: 8px 14px;
      font-size: 12px;
    }
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.6s;
  }

  button:hover::before {
    left: 150%;
  }

  button:hover {
    background: linear-gradient(
      145deg,
      rgba(181, 127, 47, 0.35),
      rgba(181, 127, 47, 0.25)
    );
    color: #fff;
    box-shadow:
      inset 0 0 15px rgba(181, 127, 47, 0.5),
      0 0 25px rgba(181, 127, 47, 0.6);
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    button:hover {
      transform: scale(1.05);
    }
  }
`;



export default FloatingMenu;
