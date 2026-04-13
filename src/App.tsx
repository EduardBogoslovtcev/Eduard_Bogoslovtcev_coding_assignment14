import React from "react";
import styled from "styled-components";

import { HeroImage } from "./stories/Components/Hero_Image";
import { Card } from "./stories/Components/Card";
import { Button } from "./stories/Components/Button";
import { Label } from "./stories/Components/Label";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ResourceCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

export default function PortfolioPage() {
  return (
    <Container>
      {/* HERO */}
      <HeroImage
        src="https://ncube.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg"
        title="My Developer Journey"
      />

      {/* BASIC INFO */}
      <Section>
        <Title>Basic Information</Title>
        <p>
          I'm a full-stack web developer who has built skills across multiple
          technologies including frontend, backend, and DevOps tools.
        </p>
      </Section>

      {/* WORK */}
      <Section>
        <Title>Work - Full Stack Web Development</Title>
        <Grid>
          <Card
            title="E-commerce Website"
            description="Full stack app with authentication, cart, and checkout system."
            image="https://www.canadacartage.com/wp-content/uploads/2021/04/ecommerce-website.png"
            footer={
              <div>
                <Label text="Tech: HTMLS/CSS, JS, Ruby" />
                <br />
                <Button onClick={() => window.open("#")}>View Project</Button>
              </div>
            }
          />
        </Grid>
      </Section>

      {/* SKILLS */}
      <Section>
        <Title>Skills</Title>
        <p>
          Throughout the program, I gained experience in programming,
          development tools, and software design principles.
        </p>

        <h3>Languages / Frameworks</h3>
        <SkillList>
          <SkillItem>HTML, CSS, JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Java, Python, Ruby, PHP</SkillItem>
        </SkillList>

        <h3>Tools</h3>
        <SkillList>
          <SkillItem>Docker</SkillItem>
          <SkillItem>PostgreSQL</SkillItem>
          <SkillItem>GitHub</SkillItem>
          <SkillItem>VS Code</SkillItem>
        </SkillList>

        <h3>Concepts</h3>
        <SkillList>
          <SkillItem>OOP Design Principles</SkillItem>
          <SkillItem>Project Management Basics</SkillItem>
          <SkillItem>Business Analysis Basics</SkillItem>
        </SkillList>
      </Section>

      {/* RESOURCES */}
      <Section>
        <Title>Resources</Title>
        <Grid>
          <ResourceCard>
            <h4>MDN Web Docs</h4>
            <p>Best resource for HTML, CSS, and JavaScript.</p>
            <Button
              onClick={() => window.open("https://developer.mozilla.org")}
            >
              Visit
            </Button>
          </ResourceCard>

          <ResourceCard>
            <h4>GitHub</h4>
            <p>Used for version control and collaboration.</p>
            <Button onClick={() => window.open("https://github.com")}>
              Visit
            </Button>
          </ResourceCard>
        </Grid>
      </Section>

      {/* DEV SETUP */}
      <Section>
        <Title>Developer Setup</Title>

        <h3>VS Code Setup</h3>
        <p>Primary IDE with extensions for React, Docker, and Git.</p>

        <h3>Terminal Setup</h3>
        <p>Using integrated VS Code terminal for all development tasks.</p>

        <h3>Preferred Font</h3>
        <p>Default VS Code font for readability and simplicity.</p>
      </Section>
    </Container>
  );
}
