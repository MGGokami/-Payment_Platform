import { HtmlHTMLAttributes } from "react";

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {

}

export function Card(p: CardProps) {
  return (
    <div
      className="p-2 shadow rounded hover:shadow-lg"
      {...p}
    />
  )
}