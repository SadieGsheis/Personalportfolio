import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ProjectDetail } from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/projects/:id",
    Component: ProjectDetail,
  },
]);