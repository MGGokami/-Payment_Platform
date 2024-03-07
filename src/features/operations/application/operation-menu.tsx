import { ArrowUturnLeftIcon, EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/24/outline'
import { Dropdown, MenuItem, Modal } from '../../../common'
import { CreateRefund, OperationDetail } from '.'
import { useState } from 'react'
import { OperationInterface } from '..'

interface OperationMenuProps {
  item: OperationInterface
}

export function OperationMenu({item}: OperationMenuProps) {
  const [detail, setDetail] = useState(false)
  const [refund, setRefund] = useState(false)

  return (
    <div className="">
      <Dropdown
        button={<EllipsisVerticalIcon className='w-8 h-8' />}
      >
        <MenuItem
          onClick={() => setDetail(true)}
        >
          <EyeIcon className='w-6 h-6 mr-2' />
          Ver más detalles
        </MenuItem>
        <MenuItem
          onClick={() => setRefund(true)}
        >
          <ArrowUturnLeftIcon className='w-6 h-6 mr-2' />
          Realizar devolución
        </MenuItem>
      </Dropdown>

      <Modal
        open={detail}
        setOpen={setDetail}
      >
        <OperationDetail item={item} />
      </Modal>
      <Modal
        open={refund}
        setOpen={setRefund}
      >
        <CreateRefund />
      </Modal>
    </div>
  )
}
