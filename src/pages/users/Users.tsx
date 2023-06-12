import { UsersTable } from "./UsersTable"
import { useGetUsersQuery } from "./users-api"

export function Users() {
  const { data: users } = useGetUsersQuery({ offset: 0, limit: 5 })
  console.log(users)
  return (
    <>
      <h3>Users</h3>
      <UsersTable data={users ?? []} />
    </>
  )
}
