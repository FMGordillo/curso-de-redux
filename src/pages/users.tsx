import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { UsersContainer } from "../screens/Users";
import { fetchUsers } from "../App/actions";

const UsersPage = () => {
  const { data, status, error } = useSelector(
    // @ts-ignore
    ({ users }) => users,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersContainer status={status} error={error} data={data} />;
};

export { UsersPage };
