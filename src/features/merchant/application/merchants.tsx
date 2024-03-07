import { Link } from "react-router-dom";
import { Avatar, Card } from "../../../common";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function Merchants() {
  // const { showNotification } = useNotification()

  return (
    <div
      className="grid grid-cols-4 gap-2"
    >
      {
        [1, 2, 3, 4, 5, 6].map((i, index) => (
          <Card key={index}>
            <div
              className="flex relative flex-col items-center gap-2"
            >
              <Avatar />
              <Link to='/operations' className="absolute top-2 right-2">
                <ArrowRightIcon className="w-6 h-6 hover:w-4 hover:h-4 cursor-pointer" />
              </Link>
              Nombre del Comercio ({i})
            </div>
          </Card>
        ))
      }
      {/* <button onClick={() => showNotification('Hola')}>notify</button> */}
    </div>
  )
}