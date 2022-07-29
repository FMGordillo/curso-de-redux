import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/postReducer";
import { fetchUser } from "../../redux/userReducer";
import { UserContainer } from "../../screens";
import * as STATUS from "../../status";

const UserPage = () => {
  const { query } = useRouter();

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
    dispatch(fetchUser(query.id));
    // @ts-ignore
    dispatch(fetchPosts(query.id));
  }, [dispatch, query.id]);

  return (
    <UserContainer
      posts={posts}
      // @ts-ignore
      data={selectedUser}
      loading={isLoading}
      error={error}
    />
  );
};

export default UserPage;
