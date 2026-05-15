import styled from 'styled-components';

export const Controls = styled.section`
  align-items: center;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: minmax(14rem, 1fr) minmax(13rem, auto) auto auto;
  margin: 1.25rem 0;

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label`
  align-items: center;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--muted);
  display: flex;
  gap: 0.55rem;
  min-height: 2.65rem;
  padding: 0 0.75rem;

  input,
  select {
    background: transparent;
    border: 0;
    color: var(--ink);
    min-width: 0;
    outline: none;
    width: 100%;
  }
`;

export const SearchBox = styled(Field)``;
export const SortBox = styled(Field)``;
