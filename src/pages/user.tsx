import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/postReducer";
import { fetchUser } from "../redux/userReducer";
import { UserContainer } from "../screens";
import * as STATUS from "../status";

const UserPage = () => {
  const { id } = useParams<"id">();

  const dispatch = useDispatch();
  const {
    selectedUser,
    status: userStatus,
    error,
    // @ts-ignore
  } = useAppSelector((state) => state.users);
  // @ts-ignore
  const { posts, status: postStatus } = useAppSelector((state) => state.posts);

  const isLoading =
    userStatus === STATUS.LOADING || postStatus === STATUS.LOADING;

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUser(id));
    // @ts-ignore
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
