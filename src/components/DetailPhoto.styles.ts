import styled from "styled-components";

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
