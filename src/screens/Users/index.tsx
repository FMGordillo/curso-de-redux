import * as STATUS from "../../App/actions/status";
import { Loading } from "../../components";
import { TableHeader, Row } from "./components";

const UsersContainer = ({ status, data, error }) => {
  return (
    <>
      {status === STATUS.LOADING ? (
        <Loading style={{ justifySelf: "center" }} />
      ) : (
        <table>
          <TableHeader
            loading={status === STATUS.LOADING}
            data={["Nombre", "Correo", "Nombre de usuario", "Ver mas"]}
          />
          <tbody>
            {(data?.length && !error ? data : []).map((d) => (
              <Row key={d.id} data={d} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export { UsersContainer };
