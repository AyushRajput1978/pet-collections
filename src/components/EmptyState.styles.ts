import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ActionLink = styled(Link)`
  align-items: center;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--ink);
  display: inline-flex;
  font-weight: 800;
  justify-content: center;
  min-height: 2.65rem;
  padding: 0.7rem 0.95rem;
`;

export const Panel = styled.section`
  align-items: center;
  border: 1px dashed var(--line);
  border-radius: 8px;
  display: grid;
  gap: 0.7rem;
  justify-items: center;
  margin: 2rem 0;
  padding: 3rem 1rem;
  text-align: center;

  h2,
  p {
    margin: 0;
  }

  p {
    color: var(--muted);
    max-width: 34rem;
  }
`;
