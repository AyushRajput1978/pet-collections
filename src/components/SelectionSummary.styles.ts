import styled from 'styled-components';

export const Summary = styled.aside`
  align-items: center;
  background: #1e2529;
  border-radius: 8px;
  color: #fff;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr auto auto;
  padding: 0.8rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const Stat = styled.div`
  span,
  strong {
    display: block;
  }

  span {
    color: #bec9c7;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  strong {
    font-size: 1.3rem;
    line-height: 1.15;
  }
`;
