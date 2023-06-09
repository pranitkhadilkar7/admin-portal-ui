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
        <div className="h-100 overflow-auto p-3 page-container">{children}</div>
      </div>
    </>
  )
}
