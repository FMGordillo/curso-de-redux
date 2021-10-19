import { useEffect, useState } from "react";
import { Row } from "../TableRow";
import { TableHeader } from "../TableHeader";
import { Main, Table } from "./styles";

function App() {
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
    <Main>
      <Table>
        <TableHeader data={["Nombre", "Correo", "Nombre de usuario"]} />
        <tbody>
          {users.length > 0 && users.map((d) => <Row key={d.id} data={d} />)}
        </tbody>
      </Table>
    </Main>
  );
}

export { App };
