import { useContext, useEffect } from "react"
import { OperationItem } from "."
import { Loading, useAudio, useNotification } from "../../../common"
import { OperationsContext } from ".."

export function Operations() {
  const { showNotification } = useNotification()
  const { play } = useAudio('/livechat-129007.mp3')
  const { operations, loading, fetchOperations } = useContext(OperationsContext)

  useEffect(() => {
    try {
      const es = new EventSource('https://ntfyenzona.platel.cu/countdown/sse')
      es.onmessage = e => {
        // console.log(JSON.parse('{\"amount\":\"0.01\",\"transaction_uuid\":\"20131e1fbb5a4faf82764637d637e400\",\"status_denom\":\"Fallida\",\"transaction_updated_at\":\"2023-08-31T11:21:38.000-04:00\",\"transaction_signature\":\"X21uOEbMhoLZ\",\"transaction_denom\":\"PagoaComercioporQR\",\"username\":\"czequeira884\",\"name\":\"CarlosAlberto\",\"lastname\":\"ZequeiraSánchez\"}'))
        fetchOperations()
        const data = JSON.parse(e.data)
        showNotification(`${data.message}`)
        play()
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (loading) return (
    <div className="flex justify-center items-center">
      <Loading />
    </div>
  )

  return (
    <ul className="flex flex-col-reverse gap-2">
      {
        operations.map((item, index) => (
          <OperationItem key={index} item={item} />
        ))
      }
    </ul>
  )
}
