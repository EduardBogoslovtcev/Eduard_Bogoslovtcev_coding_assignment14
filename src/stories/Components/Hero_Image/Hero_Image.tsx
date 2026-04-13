import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./Hero_Image.types";

const Wrapper = styled.div<{
  src: string;
  height: string;
  disabled?: boolean;
}>`
  width: 100%;
  height: ${({ height }) => height};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Overlay = styled.div<{ disabled?: boolean }>`
  position: absolute;
  inset: 0;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)"};
`;

const Title = styled.h1<{ disabled?: boolean }>`
  position: relative;
  color: ${({ disabled }) => (disabled ? "#cccccc" : "#ffffff")};
  font-size: clamp(1.5rem, 4vw, 3rem);
  text-align: center;
  margin: 0;
  padding: 0 1rem;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  title,
  height = "400px",
  disabled = false,
}) => {
  return (
    <Wrapper src={src} height={height} disabled={disabled}>
      <Overlay disabled={disabled} />
      <Title disabled={disabled}>{title}</Title>
    </Wrapper>
  );
};
