import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface DropdownProps {
  button: ReactNode
  children: ReactNode
}

export function Dropdown(p: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {p.button}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-30 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-600 dark:text-white focus:outline-none">
          {p.children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
