import * as STATUS from "../../App/actions/status";
import { Loading } from "../../components";
import { Table } from "./styles";
import { TableHeader, Row } from "./components";

const UsersContainer = ({ status, data, error }) => {
  return (
    <>
      <p>Fetch status: {status}</p>
      {status === STATUS.LOADING_STATUS ? (
        <Loading style={{ justifySelf: "center" }} />
      ) : (
        <Table>
          <TableHeader
            loading={status === STATUS.LOADING_STATUS}
            data={["Nombre", "Correo", "Nombre de usuario"]}
          />
          <tbody>
            {(data?.length && !error ? data : []).map((d) => (
              <Row key={d.id} data={d} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export { UsersContainer };