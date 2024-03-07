import { useState } from "react";
import { Calculator, DinamicQr } from ".";
import { Modal } from "../../../common";
import { QrCodeIcon } from "@heroicons/react/20/solid";

export function CreatePayment() {
  const [dinamicQr, setDinamicQr] = useState(false)

  const generateQr = async (value: number) => {
    console.log(value)
    setDinamicQr(true)
  }

  return (
    <>
      <Calculator
        onSubmit={generateQr}
        submitIcon={
          <QrCodeIcon className="h-6 mx-auto" />
        }
      />
      <Modal
        open={dinamicQr}
        setOpen={setDinamicQr}
      >
        <DinamicQr />
      </Modal>
    </>
  )
}