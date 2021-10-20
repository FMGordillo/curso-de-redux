import { Post } from "./components";
import { Title, Loading } from "../../components";

const UserContainer = ({ data, posts, loading, error }) => {
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Title>Articles posted by user</Title>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};

export { UserContainer };
