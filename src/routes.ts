import { RouteObject } from "react-router-dom";
import { Layout, Merchants, OperationsView, Settings } from "./features";

export const children: RouteObject[] = [
  {
    path: 'merchants',
    Component: Merchants,
  },
  {
    path: 'settings',
    Component: Settings,
  },
  {
    path: 'operations',
    Component: OperationsView,
  },
]

export const routes: RouteObject[] = [
  {
    path: '',
    Component: Layout,
    children,
  },
]