import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as STATUS from "../App/actions/status";
import { fetchPosts, fetchUser } from "../App/actions";
import { UserContainer } from "../containers";

const UserPage = () => {
  const { id } = useParams<"id">();

  const dispatch = useDispatch();
  const {
    selectedUser,
    status: userStatus,
    error,
    // @ts-ignore
  } = useSelector((state) => state.users);
  // @ts-ignore
  const { posts, status: postStatus } = useSelector((state) => state.posts);

  const isLoading =
    userStatus === STATUS.LOADING || postStatus === STATUS.LOADING;

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  return (
    <UserContainer
      posts={posts}
      data={selectedUser}
      loading={isLoading}
      error={error}
    />
  );
};

export { UserPage };
