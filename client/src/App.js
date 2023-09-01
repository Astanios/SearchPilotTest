import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/Home";
import Item from "./containers/Item";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/item/:id?",
    element: <Item />,
  },
]);

function App() {
  return (
    <div className="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
