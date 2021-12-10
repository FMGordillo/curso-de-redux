import { Status } from 'App/types'
import Loading from 'components/Loading'
import type { FunctionComponent } from 'react'
import { Row, TableHeader } from './components'
import { Table } from './styles'

interface UsersContainerProps {
  status: Status
  data: unknown[] // TODO: Improve this
  error: boolean
}

const UsersContainer: FunctionComponent<UsersContainerProps> = ({ status, data, error }) => {
  return (
    <>
      {status === Status.LOADING
        ? (
          <Loading style={{ justifySelf: 'center' }} />
          )
        : (
          <Table>
            <TableHeader
              loading={false}
              data={['Nombre', 'Correo', 'Nombre de usuario', 'Ver mas']}
            />
            <tbody>
              {(data?.length === 0 && !error ? data : []).map((d) => (
                <Row key={d.id} data={d} />
              ))}
            </tbody>
          </Table>
          )}
    </>
  )
}

export default UsersContainer
