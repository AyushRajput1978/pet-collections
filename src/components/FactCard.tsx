import { Fact } from "./FactCard.styles";

type FactCardProps = {
  label: string;
  value: string;
};

export function FactCard({ label, value }: FactCardProps) {
  return (
    <Fact>
      <span>{label}</span>
      <strong>{value}</strong>
    </Fact>
  );
}
