import styled from "styled-components";

const Article = styled.article`
  padding: 14px;  
  margin: 14px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid #ccc;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Post = ({ data }) => {
  return (
    <Article>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </Article>
  );
};

export { Post };