import { ReactNode } from "react"
import { NavbarAtTop } from "./NavbarAtTop"
import { LeftNavigation } from "../left-nav/LeftNavigation"

type Props = {
  children: ReactNode
}

export function PageLayout({ children }: Props) {
  return (
    <>
      <NavbarAtTop />
      <div className="h-100 overflow-hidden d-flex">
        <LeftNavigation />
        <div className="h-100 w-100 overflow-hidden d-flex flex-column page-container">
          <div className="p-top"></div>
          <div className="h-100 w-100 overflow-auto d-flex flex-column p-3">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
