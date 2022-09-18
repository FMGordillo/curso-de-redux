import { useGetUsersQuery } from "../redux/reducers/userReducer";

import { UsersContainer } from "../screens/Users";

const UsersPage = () => {
  const { data, error, isLoading } = useGetUsersQuery('');

  return <UsersContainer loading={isLoading} error={error} data={data} />;
};

export default UsersPage;
