import { useLocation, useNavigate } from "react-router-dom"
import { LEFT_NAV } from "../../routes/paths"
import classNames from "classnames"

export function LeftNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="h-100 d-flex flex-column overflow-hidden left-nav">
      <div className="p-top"></div>
      <div className="h-100 overflow-auto p-3">
        {LEFT_NAV.map((leftNav) => (
          <div
            onClick={() => {
              navigate(leftNav.path)
            }}
            key={`${leftNav.path}-left-nav`}
            className={classNames("nav-item py-2", {
              active: location.pathname === leftNav.path,
            })}
          >
            {leftNav.title}
          </div>
        ))}
      </div>
    </div>
  )
}
