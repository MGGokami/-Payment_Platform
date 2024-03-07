import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { Calculator } from ".";

export function CreateRefund() {
  const refund = async (value: number) => {
    console.log(value)
  }

  return (
    <>
      <Calculator
        onSubmit={refund}
        limit={56}
        submitIcon={
          <ArrowUturnLeftIcon className="h-6 mx-auto" />
        }
      />
    </>
  )
}