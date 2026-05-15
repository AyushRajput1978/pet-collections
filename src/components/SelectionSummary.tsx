import { Download, Trash2 } from 'lucide-react';
import { useSelection } from '../state/SelectionContext';
import { downloadPets } from '../utils/download';
import { formatBytes } from '../utils/formatters';
import { Button } from './Button';
import { Stat, Summary } from './SelectionSummary.styles';

export function SelectionSummary() {
  const { selectedCount, selectedPets, totalFileSize, clearSelection } = useSelection();

  return (
    <Summary>
      <Stat>
        <span>Selected</span>
        <strong>{selectedCount}</strong>
      </Stat>
      <Stat>
        <span>Estimated size</span>
        <strong>{formatBytes(totalFileSize)}</strong>
      </Stat>
      <Button
        type="button"
        $variant="primary"
        disabled={selectedCount === 0}
        onClick={() => downloadPets(selectedPets)}
      >
        <Download size={18} />
        Download
      </Button>
      <Button type="button" disabled={selectedCount === 0} onClick={clearSelection}>
        <Trash2 size={18} />
        Clear
      </Button>
    </Summary>
  );
}
