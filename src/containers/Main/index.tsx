import { Title } from 'components'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Code, List } from './styles'

const IndexContainer: FunctionComponent = () => (
  <section>
    <Title>Welcome to my Redux website</Title>
    <p>I will try to do my best to show you how I implement</p>
    <List>
      <li>React</li>
      <li>Typescript</li>
      <li>Redux</li>
      <li>... and coding guidelines (using <Code>StandardJS</Code>)</li>
    </List>
    <p>You can start by going to the <Link to='/users'>Users page</Link></p>
  </section>
)

export default IndexContainer
