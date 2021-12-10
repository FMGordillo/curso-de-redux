import { Post } from './components'
import { Title } from '../../components'
import Loading from 'components/Loading'
import type { FunctionComponent } from 'react'

interface UserContainerProps {

}

const UserContainer: FunctionComponent = ({ data, posts, loading, error }) => {
  return loading
    ? (
      <Loading />
      )
    : (
      <div>
        <Title>Articles posted by user</Title>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
      )
}

export default UserContainer
