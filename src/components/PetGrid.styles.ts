import styled from "styled-components";

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
