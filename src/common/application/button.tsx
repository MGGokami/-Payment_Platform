import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(p: ButtonProps) {
  return (
    <button
      className="p-2 shadow hover:shadow-lg hover:bg-primary-400 hover:text-white rounded-lg"
      {...p}
    />
  )
}