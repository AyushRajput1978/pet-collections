import styled from "styled-components";

export const Hero = styled.section`
  align-items: end;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1fr) minmax(22rem, 30rem);
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  display: grid;
  gap: 0.55rem;

  span {
    color: var(--teal);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.2rem;
    line-height: 0.95;
    margin: 0;
    max-width: 780px;

    @media (min-width: 760px) {
      font-size: 3.4rem;
    }

    @media (min-width: 1080px) {
      font-size: 4.8rem;
    }
  }

  p {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.6;
    margin: 0;
    max-width: 560px;
  }
`;

export const ResultLine = styled.p`
  color: var(--muted);
  font-weight: 700;
  margin: 0 0 0.8rem;
`;

export const Grid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1040px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 0;
`;

export const Centered = styled.div`
  align-items: center;
  color: var(--muted);
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  min-height: 55vh;

  svg {
    animation: spin 900ms linear infinite;
    color: var(--teal);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
