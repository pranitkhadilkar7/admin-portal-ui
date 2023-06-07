import { Button } from "react-bootstrap"
import { useAppDispatch } from "../../store/hook"
import { logout } from "../login/login-slice"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

export function Home() {
  useDocumentTitle("Home")
  const dispatch = useAppDispatch()
  return (
    <>
      <h1>Home</h1>
      <Button
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </Button>
    </>
  )
}
