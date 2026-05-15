import { RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { ActionLink, Panel } from './EmptyState.styles';

type EmptyStateProps = {
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
};

export function EmptyState({ title, message, actionLabel, actionHref, onAction }: EmptyStateProps) {
  return (
    <Panel>
      <h2>{title}</h2>
      <p>{message}</p>
      {actionLabel && onAction ? (
        <Button type="button" onClick={onAction}>
          <RefreshCw size={17} />
          {actionLabel}
        </Button>
      ) : null}
      {actionLabel && actionHref ? <ActionLink to={actionHref}>{actionLabel}</ActionLink> : null}
    </Panel>
  );
}
