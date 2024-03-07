import { Link } from "react-router-dom";
import { Dropdown, MenuItem } from "../../../common";
import { BuildingStorefrontIcon, CogIcon } from "@heroicons/react/24/outline";

export function Header() {
  return (
    <header className="shadow">
      <div className="flex justify-between p-2 items-center container mx-auto">
        <Link
          className="flex gap-2 items-center"
          to='/operations'
        >
          <div className="w-12 h-12 bg-gray-500 rounded-lg"></div>
          <div>Nombre</div>
        </Link>

        <Dropdown
          button={(
            <div className="h-10 w-10 bg-gray-500 rounded-lg" />
          )}
        >
          <MenuItem>
            <Link
              className="flex"
              to='/merchants'
            >
            <BuildingStorefrontIcon className='w-6 h-6 mr-2' />
              Cambiar comercio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="flex"
              to='/settings'
            >
            <CogIcon className='w-6 h-6 mr-2' />
              Configuración
            </Link>
          </MenuItem>
        </Dropdown>

      </div>
    </header>
  )
}