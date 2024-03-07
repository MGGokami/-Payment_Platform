import { UserIcon } from "@heroicons/react/24/outline";

export function Avatar() {
  return (
    <div
      className="w-12 h-12 p-1 rounded-full ring ring-primary-500"
    >
      <UserIcon />
    </div>
  )
}