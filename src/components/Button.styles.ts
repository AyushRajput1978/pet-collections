import styled from 'styled-components';

export const Button = styled.button<{ $variant?: 'primary' | 'quiet' | 'danger' }>`
  align-items: center;
  background: ${({ $variant }) => {
    if ($variant === 'primary') return 'var(--teal)';
    if ($variant === 'danger') return 'var(--coral)';
    return 'var(--paper)';
  }};
  border: 1px solid
    ${({ $variant }) => ($variant === 'primary' || $variant === 'danger' ? 'transparent' : 'var(--line)')};
  border-radius: 8px;
  color: ${({ $variant }) => ($variant === 'primary' || $variant === 'danger' ? '#ffffff' : 'var(--ink)')};
  cursor: pointer;
  display: inline-flex;
  font-weight: 800;
  gap: 0.5rem;
  min-height: 2.65rem;
  justify-content: center;
  padding: 0.7rem 0.95rem;
  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ $variant }) => {
      if ($variant === 'primary') return 'var(--teal-deep)';
      if ($variant === 'danger') return '#a94638';
      return '#f1ece1';
    }};
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;
