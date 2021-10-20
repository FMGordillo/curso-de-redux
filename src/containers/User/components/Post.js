const Post = ({ data }) => {
  return (
    <article>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </article>
  );
};

export { Post };