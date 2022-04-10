import { Switch, Route } from "react-router-dom";
import useRouteList from "./route-list.hook";

const RouteList = ({ routes }) => {
  const { getRouteUrl } = useRouteList();

  return (
    <Switch>
      {routes.map((route) => {
        const routeUrl = getRouteUrl(route);

        return <Route path={routeUrl} {...route} key={route.path} data-testid="RouteList-testid" />;
      })}
    </Switch>
  );
};

export default RouteList;
