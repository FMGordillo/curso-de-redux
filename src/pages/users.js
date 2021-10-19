import styled from "styled-components";
import { useEffect, useState } from "react";
import { Row, TableHeader } from "../components";

export const Table = styled.table``;

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await data.json();
      setUsers(json);
    };
    fn();
  }, []);

  return (
    <Table>
      <TableHeader data={["Nombre", "Correo", "Nombre de usuario"]} />
      <tbody>
        {users.length > 0 && users.map((d) => <Row key={d.id} data={d} />)}
      </tbody>
    </Table>
  );
};

export { UsersPage };
