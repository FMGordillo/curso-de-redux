import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyGetPostsQuery } from "../../redux/reducers/postReducer";
import { UserContainer } from "../../screens";

const UserPage = () => {
  const { query } = useRouter();
  const [getPosts, { data, isLoading, error }] = useLazyGetPostsQuery();

  useEffect(() => {
    if (query && query.id && typeof query.id === "string") {
      getPosts(query.id);
    }
  }, [getPosts, query, query.id]);

  return <UserContainer posts={data} loading={isLoading} error={error} />;
};

export default UserPage;
