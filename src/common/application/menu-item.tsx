import { Menu } from "@headlessui/react";
import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode
  onClick?: () => void
}

export function MenuItem({ children, onClick }: MenuItemProps) {
  return (
    <div className="px-1 py-1 ">
      <Menu.Item>
        {({ active }) => (
          <button
            className={`${active && 'bg-primary-500 text-white'
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            onClick={onClick}
          >
            {children}
          </button>
        )}
      </Menu.Item>
    </div>
  )
}