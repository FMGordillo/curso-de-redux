import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Eye } from '../../../components'

interface RowProps {
  data: {
    id: string
    name: string
    email: string
    username: string
  }
}

const Row: FunctionComponent<RowProps> = ({ data }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.username}</td>
    <td><Link to={`/user/${data.id}`}><Eye /></Link></td>
  </tr>
)

export { Row }
