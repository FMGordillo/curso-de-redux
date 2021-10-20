import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, TableHeader } from "../components";

import { fetchUsers } from "../App/actions";

export const Table = styled.table``;

const UsersPage = () => {
  const users = useSelector(({ users }) => users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
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
