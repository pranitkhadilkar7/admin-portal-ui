import { Button } from "react-bootstrap"

export function NavbarAtTop() {
  return (
    <div className="navbar-top d-flex align-items-center px-3">
      <div className="left-nav-toggle">Tooggle Icon</div>
      <div className="flex-grow-1 d-flex align-items-center justify-content-between">
        <div>Logo</div>
        <div>
          <Button onClick={() => {}}>Logout</Button>
        </div>
      </div>
    </div>
  )
}
