import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.25rem;
`

export const List = styled.ul`
  list-style: square;
  & > li {
    margin: 1rem;
  }
`

export const Code = styled.code`
  color: hsl(0deg, 60%, 50%);
  background: hsl(0deg, 0%, 90%);
  font-family: monospace;
  padding: 0.15rem 0.25rem;
`
