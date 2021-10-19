const Row = ({ data }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.username}</td>
  </tr>
);

export { Row };
