import { useRouteMatch } from "react-router-dom";


const useRouteList = () => {
  const match = useRouteMatch();
  const getRouteUrl = (route) => {
    return match.url === "/" ? `${route.path}` : `${match.url}${route.path}`;
  };

  return {
    getRouteUrl,
  };
};

export default useRouteList;
