import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background: rgba(255, 253, 248, 0.92);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
`;

export const HeaderInner = styled.div`
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr auto auto;
  margin: 0 auto;
  max-width: 1240px;
  padding: 0.85rem 1.25rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr auto;
  }
`;

export const Brand = styled(NavLink)`
  align-items: center;
  display: inline-flex;
  gap: 0.7rem;
  min-width: 0;

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 1.05rem;
    line-height: 1.1;
  }

  span {
    color: var(--muted);
    font-size: 0.78rem;
    margin-top: 0.1rem;
  }
`;

export const BrandMark = styled.span`
  align-items: center;
  background: var(--teal);
  border-radius: 8px;
  color: #fff !important;
  display: inline-flex !important;
  flex: 0 0 2.35rem !important;
  font-size: 0.83rem !important;
  font-weight: 900;
  height: 2.35rem;
  justify-content: center !important;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 0.35rem;

  @media (max-width: 760px) {
    grid-column: 1 / -1;
    overflow-x: auto;
  }
`;

export const NavItem = styled(NavLink)`
  align-items: center;
  border-radius: 8px;
  color: var(--muted);
  display: inline-flex;
  font-weight: 800;
  gap: 0.45rem;
  min-height: 2.35rem;
  padding: 0.55rem 0.75rem;
  white-space: nowrap;

  &.active {
    background: #e7f1ef;
    color: var(--teal-deep);
  }
`;

export const SelectionBadge = styled(NavLink)`
  align-items: center;
  background: #1e2529;
  border-radius: 8px;
  color: #fff;
  display: inline-grid;
  gap: 0.5rem;
  grid-template-columns: auto auto auto;
  min-height: 2.6rem;
  padding: 0.55rem 0.8rem;

  span {
    font-weight: 900;
  }

  small {
    color: #cdd6d5;
    font-size: 0.74rem;
    font-weight: 800;
  }
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: 1240px;
  padding: 1.4rem 1.25rem 4rem;
`;
