import { Post } from "./components";
import { Icons, Title } from "../../components";

const UserContainer = ({ error, posts, loading }) => {
  if (error) {
    return null;
  }

  return loading ? (
    <Icons.Loading style={{ justifySelf: "center" }} />
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
