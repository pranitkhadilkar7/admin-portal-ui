import { Button } from "react-bootstrap"
import { UsersTable } from "./UsersTable"
import { useGetUsersQuery } from "./users-api"
import { useReducer } from "react"
import { PayloadAction } from "@reduxjs/toolkit"

type State = {
  page: number
  pageSize: number
}

type Action = "PAGE" | "PAGE_SIZE"

function reducer(state: State, action: PayloadAction<number, Action>): State {
  const { payload, type } = action
  switch (type) {
    case "PAGE":
      return {
        ...state,
        page: payload,
      }
    case "PAGE_SIZE":
      return {
        ...state,
        page: 0,
        pageSize: payload,
      }
    default:
      return state
  }
}

export function Users() {
  const [state, changeState] = useReducer(reducer, {
    page: 0,
    pageSize: 5,
  })
  const { data: users } = useGetUsersQuery({
    offset: state.page * state.pageSize,
    limit: state.pageSize,
  })

  return (
    <>
      <h3>Users</h3>
      <UsersTable data={users?.result ?? []} />
      <div className="d-flex align-items-center justify-content-end mt-2">
        <div className="d-flex align-items-center">
          <div className="mr-1">Total Pages: </div>
          <div>{Math.ceil((users?.total ?? 0) / state.pageSize)}</div>
        </div>
        <div className="mx-2">|</div>
        <div className="d-flex align-items-center">
          <div className="mr-1">Active Page: </div>
          <div>{state.page + 1}</div>
        </div>
        <Button
          className="mx-2"
          disabled={!state.page}
          onClick={() => {
            changeState({ type: "PAGE", payload: state.page - 1 })
          }}
        >
          Previous
        </Button>
        <Button
          disabled={
            state.page + 1 === Math.ceil((users?.total ?? 0) / state.pageSize)
          }
          onClick={() => {
            changeState({ type: "PAGE", payload: state.page + 1 })
          }}
        >
          Next
        </Button>
      </div>
    </>
  )
}
