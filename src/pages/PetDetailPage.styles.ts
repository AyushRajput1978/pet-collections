import { Link } from "react-router-dom";
import styled from "styled-components";

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
  align-items: start;
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
  height: clamp(22rem, 60vh, 34rem);
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    display: block;
    height: 100%;
    inset: 0;
    position: absolute;
    width: 100%;
  }

  img:first-child {
    filter: blur(22px);
    object-fit: cover;
    opacity: 0.42;
    transform: scale(1.08);
  }

  img:last-child {
    height: 100%;
    object-fit: contain;
    object-position: center;
    z-index: 1;
  }

  @media (max-width: 880px) {
    height: clamp(18rem, 58vw, 28rem);
  }
`;

export const Profile = styled.article`
  align-content: center;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  display: grid;
  gap: 1rem;
  min-height: clamp(22rem, 60vh, 34rem);
  padding: 1.1rem;

  @media (min-width: 760px) {
    padding: 2rem;
  }

  @media (max-width: 880px) {
    min-height: auto;
  }

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 2.1rem;
    line-height: 0.95;

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
