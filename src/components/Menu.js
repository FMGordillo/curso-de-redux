import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: hsl(40deg, 40%, 50%);

  ul {
    display: flex;
    align-items: left;
    list-style: none;
  }
  ul > li {
    margin: 14px;
  }
  ul > li > a {
    text-decoration: none;
  }
`;

const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </Nav>
  );
};

export { Menu };
