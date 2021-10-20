import { Post } from "./components";
import { Loading } from "../../components";

const UserContainer = ({ data, posts, loading, error }) => {
  return loading ? (
    <Loading />
  ) : (
    posts.map((post) => <Post key={post.id} data={post} />)
  );
};

export { UserContainer };
