import QRCode from "react-qr-code";

interface QrProps {
  value: string
  imageUrl?: string
}

export function Qr(p: QrProps) {
  return (
    <div className="relative">
      {
        p.imageUrl && (
          <div className="absolute w-16 h-16 inset-0 flex items-center justify-center mx-auto my-auto p-1 bg-white rounded-full">
            <img src={p.imageUrl} className="w-12 h-12" />
          </div>
        )
      }
      <QRCode value={p.value} />
    </div>
  )
}