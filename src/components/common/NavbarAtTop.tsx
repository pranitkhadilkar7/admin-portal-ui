import { Button } from "react-bootstrap"
import { useAppDispatch } from "../../store/hook"
import { logout } from "../../pages/login/login-slice"

export function NavbarAtTop() {
  const dispatch = useAppDispatch()
  return (
    <div className="navbar-top d-flex align-items-center px-3">
      <div className="left-nav-toggle">Tooggle Icon</div>
      <div className="flex-grow-1 d-flex align-items-center justify-content-between">
        <div>Logo</div>
        <div>
          <Button
            onClick={() => {
              dispatch(logout())
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
