import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Loading from 'components/Loading'

const THead = styled.thead`
  text-align: left;
`

interface TableHeaderProps {
  data: string[]
  loading: boolean
}

const TableHeader: FunctionComponent<TableHeaderProps> = ({ data, loading }) => {
  return loading
    ? (
      <Loading />
      )
    : (
      <THead>
        <tr>
          {data.map((h: string) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </THead>
      )
}

export { TableHeader }
