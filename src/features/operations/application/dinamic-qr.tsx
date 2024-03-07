import { useEffect, useState } from "react"
import { getDinamicQr } from ".."
import { Loading, Qr } from "../../../common"

export function DinamicQr() {
  const [loading, setLoading] = useState(true)
  const [qr, setQr] = useState('')

  const initial = async () => {
    const t = await getDinamicQr()
    setQr(t)
    setLoading(false)
  }

  useEffect(() => {
    initial()
  }, [])

  if (loading) return (
    <div className="flex flex-col gap-2 items-center p-2">
      <Loading />
      <p>Generando QR dinámico...</p>
    </div>
  )

  return (
    <div className="p-4">
      <Qr value={qr} imageUrl="/ez.png" />
    </div>
  )
}