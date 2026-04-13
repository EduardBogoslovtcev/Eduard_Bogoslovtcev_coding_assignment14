import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const x = 1;

const StyledImg = styled.img<{
  disabled?: boolean;
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 100%;
  object-fit: cover;
  border-radius: 6px;

  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width = "300px",
  height = "200px",
  disabled = false,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};
