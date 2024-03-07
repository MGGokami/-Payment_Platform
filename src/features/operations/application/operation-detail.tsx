import { OperationInterface } from ".."

interface OperationDetailProps {
  item: OperationInterface
}

export function OperationDetail(p: OperationDetailProps) {
  return (
    <div>Detalles de la operacion {p.item.name}</div>
  )
}