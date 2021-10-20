import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPosts } from "../App/actions/postActions";
import { fetchUser } from "../App/actions/userActions";
import { UserContainer } from "../containers";

const UserPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { selectedUser, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchPosts(id));
  }, [dispatch, id])

  return <UserContainer data={selectedUser} loaing={loading} error={error} />;
};

export { UserPage };
