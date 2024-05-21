import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom/client";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import SignIn, { action as rootAction } from "./routes/sign-in";
import User from "./routes/user";
import { authenticationReducer } from "./features/userSlice.jsx";


import { Provider, useDispatch } from "react-redux";
import store from "./store.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function AuthenticatedRoute ({ element }) {
  const dispatch = useDispatch();
  const token = window.localStorage.getItem('token');
  console.log(token)

  useEffect(() => {
    if (token != null) {
      console.log('ok');
      dispatch(authenticationReducer(true));
    } else {
      console.log('fail');
    }
  }, [dispatch, token]);

  return token != null ? element : null;
};


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
        element: <AuthenticatedRoute element={<User />} />,
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
  <Provider store={store}>
    <ErrorBoundary errorElement={<Error />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </Provider>
);