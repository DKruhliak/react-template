import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import DefaultLayout from "../layouts/DefaultLayout"
import MainPage from "./MainPage"
import NotFoundPage from "./NotFoundPage"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<DefaultLayout />} path={"/"}>
        <Route element={<MainPage />} index={true} />
        <Route element={<NotFoundPage />} path={"*"} />
      </Route>
    </Route>
  )
)

export default Router
