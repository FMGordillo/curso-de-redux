import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import * as status from "../App/actions/status";
import { Loading, Row, TableHeader } from "../components";

import { fetchUsers } from "../App/actions";

export const Table = styled.table``;

const UsersPage = () => {
  const {
    data,
    status: dataStatus,
    error,
  } = useSelector(({ users }) => users, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <p>Fetch status: {dataStatus}</p>
      {dataStatus === status.LOADING_STATUS ? (
        
        <Loading style={{ justifySelf: "center"}} />
      ) : (
        <Table>
          <TableHeader
            loading={dataStatus === status.LOADING_STATUS}
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

export { UsersPage };
