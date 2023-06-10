import { Button, Col, Row } from "react-bootstrap"
import { useAppDispatch } from "../../store/hook"
import { login } from "./login-slice"
import { useForm } from "react-hook-form"
import { LoginForm } from "./login-type"
import { validateSimpleEmail } from "../../constants/regExPattern"
import { ErrorText } from "../../components/common/ErrorText"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"

export function Login() {
  useDocumentTitle("Login")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  })
  const dispatch = useAppDispatch()

  function loginUser(data: LoginForm) {
    dispatch(login(data))
  }

  return (
    <Row className="m-0 p-0">
      <Col sm="4" className="mx-auto mt-4">
        <h2 className="mb-3">Welcome To EMTECH Admin Portal</h2>
        <p>Sign In to manage your account</p>
        <div className="mb-4">
          <input
            type="text"
            className="form-control px-0"
            placeholder="Email"
            {...register("email", {
              required: true,
              validate: { emailPattern: (value) => validateSimpleEmail(value) },
            })}
          />
          {!!errors.email && (
            <>
              {errors.email.type === "required" && (
                <ErrorText text="Email is required" />
              )}
              {errors.email.type === "emailPattern" && (
                <ErrorText text="Email is invalid" />
              )}
            </>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control px-0"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {!!errors.password && (
            <>
              {errors.password.type === "required" && (
                <ErrorText text="Password is required" />
              )}
            </>
          )}
        </div>

        <Button onClick={handleSubmit(loginUser)}>Sign In</Button>
      </Col>
    </Row>
  )
}
