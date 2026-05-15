import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.article<{ $selected: boolean }>`
  background: var(--paper);
  border: 1px solid ${({ $selected }) => ($selected ? 'var(--teal)' : 'var(--line)')};
  border-radius: 8px;
  box-shadow: ${({ $selected }) => ($selected ? '0 12px 32px rgba(21, 127, 123, 0.2)' : 'none')};
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-width: 0;
  overflow: hidden;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const ImageWrap = styled.div`
  aspect-ratio: 4 / 3;
  background: #e4e0d6;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const SelectButton = styled.button`
  align-items: center;
  background: rgba(30, 37, 41, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 2.5rem;
  justify-content: center;
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  width: 2.5rem;
`;

export const CardBody = styled.div`
  display: grid;
  gap: 0.55rem;
  padding: 0.9rem;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.08rem;
    line-height: 1.15;
  }

  p {
    color: var(--muted);
    display: -webkit-box;
    font-size: 0.92rem;
    line-height: 1.45;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const Meta = styled.div`
  color: var(--sage);
  display: flex;
  font-size: 0.72rem;
  font-weight: 900;
  gap: 0.55rem;
  justify-content: space-between;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr 1fr;

  > * + * {
    border-left: 1px solid var(--line);
  }
`;

export const ActionLink = styled(Link)`
  align-items: center;
  color: var(--teal-deep);
  display: inline-flex;
  font-weight: 900;
  gap: 0.45rem;
  justify-content: center;
  min-height: 2.8rem;
`;

export const ActionAnchor = styled.a`
  align-items: center;
  color: var(--teal-deep);
  display: inline-flex;
  font-weight: 900;
  gap: 0.45rem;
  justify-content: center;
  min-height: 2.8rem;
`;
