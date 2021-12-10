import type { PostState } from 'App/reducers/postReducer'
import type { UserState } from 'App/reducers/userReducer'
import type { RootState } from 'App/store'
import { Status } from 'App/types'
import UserContainer from 'containers/User'
import type { FunctionComponent } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPosts, fetchUser } from '../App/actions'

const UserPage: FunctionComponent = () => {
  const { id } = useParams<'id'>()

  const dispatch = useDispatch()
  const {
    selectedUser,
    status: userStatus,
    error
  } = useSelector<RootState, UserState>((state) => state.users)
  const { posts, status: postStatus } = useSelector<RootState, PostState>((state) => state.posts)

  const isLoading =
    userStatus === Status.LOADING || postStatus === Status.LOADING

  useEffect(() => {
    dispatch(fetchUser(id))
    dispatch(fetchPosts(id))
  }, [dispatch, id])

  return (
    <UserContainer
      posts={posts}
      data={selectedUser}
      loading={isLoading}
      error={error}
    />
  )
}

export default UserPage
