import React from 'react';
import { Route } from 'react-router-dom';
import { RouteInterface } from '@/assets/interface';

// interface IRoute {
//   route: Routes.IRoutes,
//   index: number
// }

const RouteWithSubRoutes: React.FC<RouteInterface> = (route, index: number) => {
  return (
    <Route
      key={index}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default RouteWithSubRoutes;
