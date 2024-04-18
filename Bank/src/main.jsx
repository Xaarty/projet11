import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import SignIn, { action as rootAction } from "./routes/sign-in";
import User from "./routes/user";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path: "/sign-in",
        element: <SignIn />,
        action: rootAction,
      },{
        path: "/user",
        element: <User />
      },
    ],
  },
]);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary errorElement={<Error />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);