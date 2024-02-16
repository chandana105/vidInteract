import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ErrorPage from "./components/ErrorPage";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

// npx create-react-app: executing a create-react-app package

/**
 *
 * Header
 * Body
 *  -Sidebar
 *   -Menu Items
 *  -Main Container
 *   -VIdeoContainer
 *     -Video cards
 *
 */

//  TODO: TO GET THE CHANNELS SUBSCRIBBER COUNT AND TOTAL NUMBER OF COMMENTS
// TODO: FIX THE WATCHPAGE , VIDEO DISCRIPTPN :- IF MORE THAN 3 LINES , PUT MORE...
//  TODO: CAN HAVE INFIINTE LOOP THING
//  TODO: CAN PUT SHIMMER UI
// TODO: TO PUT SCROLL ON FILTERS LIST
// TODO: TO MAKE HEADER and sidebar fixed and only scroll the main container same in watch page
//  TODO: ON SEARCH SUGGESTION, CLICK ANDFETCH SEARCH API FOR THAT AND SHOW RESULTS
