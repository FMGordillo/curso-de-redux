import { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import UsersContainer from 'containers/Users'
import { fetchUsers } from '../App/actions'
import { RootState } from 'App/store'
import { UserState } from 'App/reducers/userReducer'

const UsersPage: FunctionComponent = () => {
  const { data, status, error } = useSelector<RootState, UserState>(
    ({ users }) => users,
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return <UsersContainer status={status} error={error} data={data} />
}

export default UsersPage
