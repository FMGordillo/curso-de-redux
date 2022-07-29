import { Icons } from "../../components";
import * as STATUS from "../../status";
import { Row, TableHeader } from "./components";

const UsersContainer = ({ status, data, error }) => {
  return (
    <>
      {status === STATUS.LOADING ? (
        <Icons.Loading style={{ justifySelf: "center" }} />
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
