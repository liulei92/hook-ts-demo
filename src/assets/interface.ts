interface IRouteInterface {
  name?: string;
  path: string;
  component: any,
  routes?: Array<any>
}

interface IMenusInterface {
  active?: string
}

export type RouteInterface = IRouteInterface
export type MenusInterface = IMenusInterface
