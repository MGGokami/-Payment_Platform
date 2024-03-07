import { ArrowPathIcon, CalculatorIcon } from "@heroicons/react/24/outline";
import { Button, Modal, Qr } from "../../../common";
import { useContext, useState } from "react";
import { CreatePayment } from ".";
import { OperationsContext } from "..";

export function OperationsButtons() {
  const [createPayment, setCreatePayment] = useState(false)
  const [staticQr, setStaticQr] = useState(false)
  const [transfermovil, setTransfermovil] = useState(false)
  const { fetchOperations } = useContext(OperationsContext)

  return (
    <>
      <div className="flex gap-2 justify-end">
        {/* <Button>
        <FunnelIcon className="w-8 h-8" />
      </Button> */}
        <Button title="Actualizar los datos" onClick={() => fetchOperations()}>
          <ArrowPathIcon className="w-8 h-8" />
        </Button>
        <Button title="Generar QR dinámico" onClick={() => setCreatePayment(true)}>
          <CalculatorIcon className="w-8 h-8" />
        </Button>
        <Button title="Mostrar QR de pago" onClick={() => setStaticQr(true)}>
          <img src='/ez.png' className="w-8 h-8 grayscale" />
        </Button>
        {/* <Button onClick={() => setTransfermovil(true)}>
        <img src='/transfermovil_logo.png' className="w-8 h-8 grayscale" />
      </Button> */}
      </div>
      <Modal
        open={createPayment}
        setOpen={setCreatePayment}
      >
        <CreatePayment />
      </Modal>
      <Modal
        open={staticQr}
        setOpen={setStaticQr}
      >
        <div className="p-4">
          <Qr
            value={'0755c653b0d3af4784aa9dc77dc71a9138'}
            imageUrl="/ez.png"
          />
        </div>
      </Modal>
      <Modal
        open={transfermovil}
        setOpen={setTransfermovil}
      >
        <div className="p-4">
          <Qr
            value={'transfermovil qr dfadf asdfl asdflkjasdf lkj'}
            imageUrl='/transfermovil_logo.png'
          />
        </div>
      </Modal>
    </>
  )
}