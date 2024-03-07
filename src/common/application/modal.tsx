import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface ModalProps {
  open: boolean
  setOpen: (value: boolean) => void
  children: ReactNode
}

export function Modal(p: ModalProps) {
  return (
    <>
      <Transition appear show={p.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => p.setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-600 dark:text-white p-2 text-left align-middle shadow-xl transition-all">
                  {p.children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
