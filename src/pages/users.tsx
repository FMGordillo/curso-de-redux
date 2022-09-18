import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUsers } from "../redux/reducers/userReducer";

import { UsersContainer } from "../screens/Users";

const UsersPage = () => {
  const { data, status, error } = useAppSelector(
    ({ users }) => users,
    shallowEqual
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersContainer status={status} error={error} data={data} />;
};

export default UsersPage;
