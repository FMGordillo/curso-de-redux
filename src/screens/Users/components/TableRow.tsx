import Link from "next/link";
import { Icons } from "../../../components";

const Row = ({ data }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.username}</td>
    <td>
      <Link passHref href={`/user/${data.id}`}>
        <a>
          <Icons.Eye />
        </a>
      </Link>
    </td>
  </tr>
);

export { Row };
