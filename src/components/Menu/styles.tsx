import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: hsl(40deg, 40%, 50%);
  ul {
    display: flex;
    align-items: left;
    list-style: none;
  }
`

export const StyledLink = styled(Link)`
  color: hsl(40deg, 50%, 10%);
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    color: hsl(40deg, 40%, 80%);
  }
`
