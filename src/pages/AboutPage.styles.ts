import styled from "styled-components";

export const About = styled.section`
  display: grid;
  gap: 1.5rem;
`;

export const Intro = styled.header`
  align-items: stretch;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: minmax(0, 1.25fr) minmax(20rem, 0.75fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const IntroCopy = styled.div`
  align-content: center;
  border-bottom: 1px solid var(--line);
  display: grid;
  gap: 0.8rem;
  padding: 1.4rem 0 1.8rem;

  span {
    color: var(--teal);
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.15rem;
    line-height: 0.98;
    margin: 0;
    max-width: 820px;

    @media (min-width: 760px) {
      font-size: 3.35rem;
    }

    @media (min-width: 1080px) {
      font-size: 4.15rem;
    }
  }

  p {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.65;
    margin: 0;
    max-width: 640px;
  }
`;

export const IntroPanel = styled.aside`
  align-content: center;
  background: #1e2529;
  border-radius: 8px;
  color: #fff;
  display: grid;
  min-height: 18rem;
  padding: 1rem;
`;

export const MetricGrid = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const Metric = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 8px;
  padding: 0.95rem;

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 1.45rem;
    line-height: 1;
  }

  span {
    color: #cdd6d5;
    font-size: 0.78rem;
    font-weight: 800;
    line-height: 1.35;
    margin-top: 0.35rem;
    text-transform: uppercase;
  }
`;

export const FeatureGrid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Feature = styled.article`
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 14px 32px rgba(35, 45, 52, 0.07);
  display: grid;
  gap: 0.75rem;
  min-height: 11.5rem;
  padding: 1rem;

  svg {
    background: #e8f1ef;
    border-radius: 8px;
    color: var(--teal);
    padding: 0.35rem;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.05rem;
  }

  p {
    color: var(--muted);
    line-height: 1.55;
  }
`;

export const Workflow = styled.section`
  align-items: center;
  background: #eef3ed;
  border: 1px solid #d5e2db;
  border-radius: 8px;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.8fr);
  padding: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkflowItem = styled.div`
  align-items: start;
  display: grid;
  gap: 0.85rem;
  grid-template-columns: auto minmax(0, 1fr);

  svg {
    color: var(--teal-deep);
    margin-top: 0.2rem;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.15rem;
  }

  p {
    color: var(--muted);
    line-height: 1.55;
    margin-top: 0.35rem;
  }
`;

export const Note = styled.p`
  color: var(--teal-deep);
  font-weight: 800;
  line-height: 1.55;
  margin: 0;
`;
