import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Detail = styled.section`
  display: grid;
  gap: 1rem;
`;

export const BackLink = styled(Link)`
  align-items: center;
  color: var(--teal-deep);
  display: inline-flex;
  font-weight: 900;
  gap: 0.45rem;
  width: fit-content;
`;

export const DetailGrid = styled.div`
  align-items: stretch;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: minmax(0, 1.1fr) minmax(19rem, 0.9fr);

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoPanel = styled.div`
  background: #e4e0d6;
  border-radius: 8px;
  min-height: 25rem;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const Profile = styled.article`
  align-content: center;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  display: grid;
  gap: 1rem;
  padding: 1.1rem;

  @media (min-width: 760px) {
    padding: 2rem;
  }

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 2.1rem;
    line-height: 0.95;

    @media (min-width: 760px) {
      font-size: 3.3rem;
    }

    @media (min-width: 1080px) {
      font-size: 4.6rem;
    }
  }

  p {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.65;
  }
`;

export const Kicker = styled.span`
  color: var(--coral);
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const FactGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

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

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;
