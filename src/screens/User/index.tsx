import { Post } from "./components";
import { Icons, Title } from "../../components";
import classes from './style.module.css';

const UserContainer = ({ error, posts, loading }) => {
  if (error) {
    return null;
  }

  if (loading) {
    return <Icons.Loading style={{ justifySelf: "center" }} />;
  }

  return (
    <div className={classes.container}>
      <Title>Articles posted by user</Title>
      {posts?.length > 0 &&
        posts.map((post) => <Post key={post.id} data={post} />)}
    </div>
  );
};

export { UserContainer };
