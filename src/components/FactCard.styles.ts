import styled from "styled-components";

export const Fact = styled.div`
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.8rem;

  span,
  strong {
    display: block;
  }

  span {
    color: var(--muted);
    font-size: 0.76rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  strong {
    margin-top: 0.2rem;
  }
`;
