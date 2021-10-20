import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, TableHeader } from "../components";

import { FETCH_USERS } from "../App/actions"

export const Table = styled.table``;

const UsersPage = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  return (
    <Table>
      <TableHeader data={["Nombre", "Correo", "Nombre de usuario"]} />
      <tbody>
        {(users?.length ? users : []).map((d) => (
          <Row key={d.id} data={d} />
        ))}
      </tbody>
    </Table>
  );
};

export { UsersPage };
