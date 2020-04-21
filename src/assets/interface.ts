interface IRouteInterface {
  path: string;
  component: any,
  routes?: Array<any>
}

export type RouteInterface = IRouteInterface
