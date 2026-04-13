import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const Wrapper = styled.div<{ disabled?: boolean }>`
  width: 100%;
  max-width: 350px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-5px)")};
    box-shadow: ${({ disabled }) =>
      disabled
        ? "0 4px 12px rgba(0, 0, 0, 0.08)"
        : "0 8px 20px rgba(0, 0, 0, 0.15)"};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #555;
`;

const Footer = styled.div`
  padding: 0.75rem 1rem;
  background-color: #f5f5f5;
  font-size: 0.9rem;
`;

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  footer,
  disabled = false,
}) => {
  return (
    <Wrapper disabled={disabled}>
      {image && <Image src={image} alt={title} />}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
};
