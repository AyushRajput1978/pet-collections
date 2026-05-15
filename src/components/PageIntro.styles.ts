import styled from "styled-components";

export const Intro = styled.header`
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
    font-size: 2.1rem;
    line-height: 0.98;
    margin: 0;

    @media (min-width: 760px) {
      font-size: 3.4rem;
    }

    @media (min-width: 1080px) {
      font-size: 4.2rem;
    }
  }

  p {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.6;
    margin: 0;
    max-width: 640px;
  }
`;
