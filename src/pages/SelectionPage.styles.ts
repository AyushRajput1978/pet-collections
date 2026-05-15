import styled from "styled-components";

export const Page = styled.section`
  display: grid;
  gap: 1.1rem;
`;

export const Header = styled.header`
  span {
    color: var(--coral);
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.1rem;
    line-height: 1;
    margin: 0.25rem 0 0;

    @media (min-width: 760px) {
      font-size: 3.4rem;
    }

    @media (min-width: 1080px) {
      font-size: 4.2rem;
    }
  }
`;

export const Grid = styled.section`
  display: grid;
  gap: 1.35rem;
  grid-template-columns: 1fr;

  @media (min-width: 650px) {
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1040px) {
    gap: 1.65rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1290px) {
    gap: 1.65rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
