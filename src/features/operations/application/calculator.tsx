import { BackspaceIcon } from "@heroicons/react/24/outline"
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secundary?: boolean
  addClassName?: string
}

function Btn({ primary, secundary, addClassName, ...p }: BtnProps) {
  return (
    <button
      className={`p-2 border m-1 rounded shadow border-gray-500 ${
        (primary&&(!p.disabled)) && 'bg-primary-600 text-white'
        } ${secundary && 'bg-primary-100 text-white'
        } ${
          p.disabled && 'bg-gray-300'
        } ${addClassName}`}
      {...p}
    >
      {p.children}
    </button>
  )
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

interface CalculatorProps {
  onSubmit: (value: number) => Promise<void>
  submitIcon: ReactNode
  limit?: number
}

export function Calculator(p: CalculatorProps) {
  const [calc, setCalc] = useState(`${p.limit || '0'}`)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(prev => {
      try {
        if (!(/\d$/.test(calc))) return prev
        const t = +eval(calc)
        return t
      } catch (error) {
        return NaN
      }
    })
  }, [calc])

  return (
    <div className="w-64 mx-auto">
      <div className="m-2 p-2 font-mono rounded text-right shadow-inner border border-gray-300 overflow-x-auto">
        {calc}
      </div>
      <div
        className={[
        'm-1 p-2 rounded font-mono flex justify-between items-center gap-2 shadow-inner border border-gray-300',
        (total < 0) && 'text-red-500',
        (p.limit && p.limit < total) && 'text-red-500', 
        ].join(' ')}
      >
        <i className={`text-gray-300 text-xs`}>total</i>
        { (isNaN(total) || total === Infinity) ? 'ERROR' : formatter.format(total)}
      </div>
      <div className="">
        <div className="grid grid-cols-4">
          <Btn
            primary
            onClick={() => setCalc('0')}
          >AC</Btn>
          <Btn
            primary
            onClick={() => setCalc(value => value.length === 1 ? '0' : value.substring(0, value.trim().length - 1).trim())}
          >
            <BackspaceIcon className="h-6 mx-auto" />
          </Btn>
          <Btn
            secundary
            onClick={() => setCalc(value => value === '0' ? '0' : `${value}/`)}
          >
            /
          </Btn>
          <Btn
            onClick={() => setCalc(value => value === '0' ? '0' : `${value}*`)}
            secundary>*</Btn>
        </div>
        <div className="grid grid-cols-4">
          <div className="grid col-span-3 grid-cols-3">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(i => (
              <Btn
                onClick={() => setCalc(value => value === '0' ? `${i}` : `${value}${i}`)}
                key={i}
              >
                {i}
              </Btn>
            ))}
            <Btn
              onClick={() => setCalc(value => value === '0' ? '0' : `${value}00`)}
            >00</Btn>
            <Btn
              onClick={() => setCalc(value => value === '0' ? '0' : `${value}0`)}
            >0</Btn>
            <Btn
              onClick={() => setCalc(value => `${value}.`)}
              secundary>.</Btn>
          </div>
          <div className="grid grid-rows-4">
            <Btn
              onClick={() => setCalc(value => value === '0' ? '0' : `${value} - `)}
              secundary>-</Btn>
            <Btn
              onClick={() => setCalc(value => value === '0' ? '0' : `${value} + `)}
              secundary>+</Btn>
            <Btn
              primary
              addClassName="row-span-2"
              onClick={() => p.onSubmit(total)}
              disabled={(total <= 0) || (!!p.limit && p.limit < total)}
            >
              {p.submitIcon}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  )
}