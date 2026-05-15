import { Download, Heart, Images, Info } from 'lucide-react';
import type { ReactNode } from 'react';
import { useSelection } from '../state/SelectionContext';
import { formatBytes } from '../utils/formatters';
import {
  Brand,
  BrandMark,
  Header,
  HeaderInner,
  Main,
  Nav,
  NavItem,
  SelectionBadge,
} from './Shell.styles';

export function Shell({ children }: { children: ReactNode }) {
  const { selectedCount, totalFileSize } = useSelection();

  return (
    <>
      <Header>
        <HeaderInner>
          <Brand to="/" aria-label="Pet Picks home">
            <BrandMark>PP</BrandMark>
            <div>
              <strong>Pet Picks</strong>
              <span>Curated companion gallery</span>
            </div>
          </Brand>

          <Nav>
            <NavItem to="/">
              <Images size={17} />
              Gallery
            </NavItem>
            <NavItem to="/selection">
              <Heart size={17} />
              Selected
            </NavItem>
            <NavItem to="/about">
              <Info size={17} />
              About
            </NavItem>
          </Nav>

          <SelectionBadge to="/selection" aria-label={`${selectedCount} selected pets`}>
            <Download size={17} />
            <span>{selectedCount}</span>
            <small>{formatBytes(totalFileSize)}</small>
          </SelectionBadge>
        </HeaderInner>
      </Header>
      <Main>{children}</Main>
    </>
  );
}
