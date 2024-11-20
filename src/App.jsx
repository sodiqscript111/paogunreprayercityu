import {
  createBrowserRouter,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from './components/home/home.jsx';
import AboutPage from "./components/aboutpage/aboutpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
]);
function App() {

  return (
    <div> <RouterProvider router={router} /></div>
    )
}

export default App
