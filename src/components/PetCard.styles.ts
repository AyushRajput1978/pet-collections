import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.article<{ $selected: boolean }>`
  aspect-ratio: 0.74;
  background: #1e2529;
  border: 1px solid
    ${({ $selected }) =>
      $selected ? "rgba(21, 127, 123, 0.95)" : "rgba(255, 255, 255, 0.2)"};
  border-radius: 24px;
  box-shadow: ${({ $selected }) =>
    $selected
      ? "0 26px 56px rgba(21, 127, 123, 0.28)"
      : "0 24px 54px rgba(35, 45, 52, 0.18)"};
  isolation: isolate;
  min-height: 25rem;
  min-width: 0;
  overflow: hidden;
  position: relative;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;

  &:hover {
    box-shadow: 0 28px 60px rgba(35, 45, 52, 0.24);
    transform: translateY(-5px);
  }

  &::after {
    background:
      linear-gradient(
        180deg,
        rgba(30, 37, 41, 0) 8%,
        rgba(30, 37, 41, 0.36) 50%,
        rgba(30, 37, 41, 0.92) 100%
      ),
      linear-gradient(0deg, rgba(15, 26, 18, 0.22), rgba(15, 26, 18, 0.22));
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
`;

export const ImageWrap = styled.div`
  inset: 0;
  position: absolute;

  img {
    height: 100%;
    object-fit: cover;
    transform: scale(1.01);
    transition: transform 320ms ease;
    width: 100%;
  }

  ${Card}:hover & img {
    transform: scale(1.07);
  }
`;

export const Content = styled.div`
  bottom: 1rem;
  color: #fff;
  display: grid;
  gap: 0.62rem;
  left: 1rem;
  position: absolute;
  right: 1rem;
  z-index: 2;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.16rem;
    line-height: 1.08;
    text-shadow: 0 1px 18px rgba(0, 0, 0, 0.34);
  }

  p {
    color: rgba(255, 255, 255, 0.82);
    display: -webkit-box;
    font-size: 0.78rem;
    line-height: 1.35;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Meta = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;

  span {
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.65rem;
    font-weight: 800;
    padding: 0.3rem 0.48rem;
    white-space: nowrap;
  }
`;

export const SelectButton = styled.button`
  align-items: center;
  backdrop-filter: blur(12px);
  background: rgba(255, 253, 248, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(30, 37, 41, 0.18);
  color: var(--teal-deep);
  cursor: pointer;
  display: inline-flex;
  height: 2.45rem;
  justify-content: center;
  position: absolute;
  right: 0.85rem;
  top: 0.85rem;
  transition:
    background 180ms ease,
    transform 180ms ease;
  width: 2.45rem;
  z-index: 3;

  &[aria-pressed="true"] {
    background: var(--teal);
    color: #fff;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

export const ActionRow = styled.div`
  display: grid;
  gap: 0.55rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 0.1rem;
`;

export const DownloadButton = styled.button`
  align-items: center;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 900;
  gap: 0.35rem;
  justify-content: center;
  min-height: 2.55rem;
  padding: 0 0.55rem;
  transition:
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.27);
    transform: translateY(-1px);
  }
`;

export const ViewButton = styled(Link)`
  align-items: center;
  background: #fff;
  border-radius: 999px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
  color: #111815;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 900;
  gap: 0.35rem;
  justify-content: center;
  min-height: 2.55rem;
  padding: 0 0.55rem;
  transition:
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    background: #eef3ed;
    transform: translateY(-1px);
  }
`;
