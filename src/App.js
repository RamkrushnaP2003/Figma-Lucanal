import "./App.css";
import { RightWidget } from "./Right";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./add";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
                    <div className="leftWidget"></div>
                    <div className="rightWidget"><RightWidget /></div>
                 </>,
    },
    {
      path: "/add",
      element: <Add />,
  },
]);

export default function App() {
  return (
    <>
      <div className="flex mt-24 container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
