import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export interface SelectItemInterface {
  name: string
  id: string
}

interface SelectProps {
  options: SelectItemInterface[]
  widthInRem?: number
  default?: string
  onChange?: (value: string) => void
}

export function Select(p: SelectProps) {
  const [selected, setSelected] = useState(p.default || 'something')
  const [item, setItem] = useState<SelectItemInterface>()

  useEffect(() => {
    const t = p.options.find(i => i.id === selected)
    setItem(t)
    if (p.onChange) p.onChange(selected)
  }, [selected])


  return (
    <div style={{
      width: p.widthInRem ? `${p.widthInRem} rem` : '100%'
    }}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full rounded py-2 pl-3 pr-10 text-left shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{
              item ? item.name : <p>Seleccione un item</p>
            }</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute bg-white dark:bg-gray-600 dark:text-white mt-1 z-20 max-h-60 w-full overflow-auto rounded py-1 shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {p.options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active && 'bg-primary-500 text-white'
                    }`
                  }
                  value={option.id}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
