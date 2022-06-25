import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userReducer";

import { UsersContainer } from "../screens/Users";

const UsersPage = () => {
  const { data, status, error } = useSelector(
    // @ts-ignore
    ({ users }) => users,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersContainer status={status} error={error} data={data} />;
};

export { UsersPage };
