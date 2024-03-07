import { Operations, OperationsButtons } from ".";
import { OperationsProvider } from "..";

export function OperationsView() {
  return (
    <OperationsProvider>
      <div className="flex flex-col gap-4">
        <OperationsButtons />
        <Operations />
      </div>
    </OperationsProvider>
  )
}