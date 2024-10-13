import { useRoutes } from "react-router-dom";
import routes from "./route/app-route.tsx";

function App() {
  return useRoutes(routes);
}

export default App;
