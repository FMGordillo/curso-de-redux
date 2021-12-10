import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { FunctionComponent } from 'react'
import { Nav, StyledLink } from './styles'

interface LiProps {
  active: boolean
}

const Li = styled.li<LiProps>`
  padding: 14px;
  border-bottom: ${({ active }) =>
    active ? '1px solid hsl(40deg, 80%, 70%)' : 'none'};

  background-color: ${({ active }) =>
    active ? 'hsl(40deg, 60%, 60%)' : 'none'};

  a {
  }
`

const Menu: FunctionComponent = () => {
  const location = useLocation()

  return (
    <Nav>
      <ul>
        <StyledLink to='/'>
          <Li active={location.pathname === '/'}>Index</Li>
        </StyledLink>
        <StyledLink to='/users'>
          <Li active={location.pathname === '/users'}>Users</Li>
        </StyledLink>
      </ul>
    </Nav>
  )
}

export default Menu
