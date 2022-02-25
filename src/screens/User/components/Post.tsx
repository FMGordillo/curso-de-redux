import classes from "./styles.module.css";

const Post = ({ data }) => {
  return (
    <article className={classes.article}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </article>
  );
};

export { Post };
