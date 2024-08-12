import { FC } from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer/Footer"

import "./DefaultLayout.scss"

const DefaultLayout: FC = () => {
  return (
    <div className={"default-layout"}>
      <main className={"main"}>
        <Outlet />
      </main>
      <footer className={"footer"}>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
