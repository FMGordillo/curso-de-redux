import { Icons } from "../../components";
import { Row, TableHeader } from "./components";

const UsersContainer = ({ loading, data, error }) => {
  return (
    <>
      {loading ? (
        <Icons.Loading style={{ justifySelf: "center" }} />
      ) : (
        <table>
          <TableHeader
            loading={loading}
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
