import styled from "styled-components";

export const Hero = styled.section`
  margin-bottom: 1rem;
`;

export const ResultLine = styled.p`
  color: var(--muted);
  font-weight: 700;
  margin: 0 0 0.8rem;
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 0;
  p {
    color: var(--muted);
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0;
    max-width: 560px;
  }
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
