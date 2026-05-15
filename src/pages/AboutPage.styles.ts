import styled from "styled-components";

export const About = styled.section`
  display: grid;
  gap: 1.4rem;
`;

export const Intro = styled.header`
  span {
    color: var(--teal);
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.2rem;
    line-height: 0.97;
    margin: 0.4rem 0 0.8rem;

    @media (min-width: 760px) {
      font-size: 3.4rem;
    }

    @media (min-width: 1080px) {
      font-size: 4.2rem;
    }
  }

  p {
    color: var(--muted);
    font-size: 1.08rem;
    line-height: 1.65;
    margin: 0;
  }
`;

export const FeatureGrid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

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
  display: grid;
  gap: 0.7rem;
  padding: 1rem;

  svg {
    color: var(--teal);
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
    line-height: 1.5;
  }
`;
