import loadable from "@loadable/component";
import { RouteList } from "./modules/components/route-list";

const PokemonList = loadable(() => import("./pages/pokemon-list"));
const PokemonDetails = loadable(() => import("./pages/pokemon-details"));
const MyPokemon = loadable(() => import("./pages/my-pokemon"));

export const routes = [
  {
    path: "/",
    name: "Pokemon",
    exact: true,
    component: () => <PokemonList />,
  },
  {
    path: "/pokemon-list",
    name: "Pokemon List",
    component: () => <PokemonList />,
  },
  {
    path: "/pokemon-details/:id/:name",
    name: "Pokemon Details",
    component: () => <PokemonDetails />,
  },
  {
    path: "/my-pokemon",
    name: "My Pokemon",
    component: () => <MyPokemon />,
  },
];

const AppRoutes = () => <RouteList routes={routes} />;

export default AppRoutes;
