import { Link } from "react-router-dom";
import { Eye } from "../../../components";

const Row = ({ data }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.username}</td>
    <td>
      <Link to={`/user/${data.id}`}>
        <Eye />
      </Link>
    </td>
  </tr>
);

export { Row };
