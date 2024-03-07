import { CheckIcon } from "@heroicons/react/20/solid";
import { OperationInterface, OperationMenu } from "..";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'
import { XMarkIcon } from "@heroicons/react/24/outline";

dayjs.extend(relativeTime)
dayjs.locale('es')

interface OperationItemProps {
  item: OperationInterface
}

export function OperationItem({ item }: OperationItemProps) {

  return (
    <li
      className={
        [
          'p-2 shadow rounded flex flex-col-reverse md:flex-row justify-between gap-8 items-center',
          ...(item.transaction_denom === 'Devolución Total' ? ['bg-orange-50 dark:bg-gray-500'] : []),
        ].join(' ')
      }
    >
      <div className="flex gap-2 grow">
        <div>
          <div className='w-24 h-24 md:w-12 md:h-12 md:rounded-lg bg-gray-300'>
            {/* <img className="rounded-lg" src="https://media.enzona.net/images/user/avatar/czequeira884.png" alt="" /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-2 md:justify-between grow">
          <div className="flex flex-col xl:flex-row xl:gap-2">
            <b>{item.name} {item.lastname}</b>
            <i>{item.transaction_denom}</i>
          </div>

          <div className="flex flex-col xl:flex-row-reverse md:text-right xl:gap-8">
            <b>$ {item.amount}</b>
            <i>{dayjs(item.transaction_updated_at).fromNow()}</i>
          </div>
        </div>
      </div>

      <div className="flex">
        {
          item.status_denom === 'Aceptada' ? (
            <div
              className="p-1 bg-green-200 dark:bg-green-500 rounded-full"
              title="Aceptada"
            >
              <CheckIcon className="w-4 h-4 text-green-500 dark:text-green-200" />
            </div>
          ) : (
            <div
              className="p-1 bg-red-200 dark:bg-red-500 rounded-full"
              title="Cancelada"
            >
              <XMarkIcon className="w-4 h-4 text-red-500 dark:text-red-200" />
            </div>
          )
        }
        <div className="cursor-pointer">
          <OperationMenu item={item} />
        </div>
      </div>
    </li>
  )
}