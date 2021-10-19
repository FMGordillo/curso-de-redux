import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const Nav = styled.nav`
  background: hsl(40deg, 40%, 50%);
  ul {
    display: flex;
    align-items: left;
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  color: hsl(40deg, 50%, 10%);
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    color: hsl(40deg, 40%, 80%);
  }
`;

const Li = styled.li`
  padding: 14px;
  border-bottom: ${({ active }) =>
    active ? "1px solid hsl(40deg, 80%, 70%)" : "none"};

  background-color: ${({ active }) =>
    active ? "hsl(40deg, 60%, 60%)" : "none"};

  a {
  }
`;

const Menu = () => {
  const location = useLocation();

  return (
    <Nav>
      <ul>
        <StyledLink to="/">
          <Li active={location.pathname === "/"}>Index</Li>
        </StyledLink>
        <StyledLink to="/users">
          <Li active={location.pathname === "/users"}>Users</Li>
        </StyledLink>
      </ul>
    </Nav>
  );
};

export { Menu };
