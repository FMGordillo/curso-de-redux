import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/reducers/postReducer";
import { fetchUser } from "../../redux/reducers/userReducer";
import { UserContainer } from "../../screens";
import * as STATUS from "../../status";

const UserPage = () => {
  const { query } = useRouter();

  const dispatch = useAppDispatch();
  const {
    status: userStatus,
    error,
  } = useAppSelector((state) => state.users);
  const { posts, status: postStatus } = useAppSelector((state) => state.posts);

  const isLoading =
    userStatus === STATUS.LOADING || postStatus === STATUS.LOADING;

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUser(query.id));
    // @ts-ignore
    dispatch(fetchPosts(query.id));
  }, [dispatch, query.id]);

  return (
    <UserContainer
      posts={posts}
      loading={isLoading}
      error={error}
    />
  );
};

export default UserPage;
