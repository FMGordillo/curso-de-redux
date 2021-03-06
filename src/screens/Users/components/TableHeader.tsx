import { FunctionComponent } from "react";
import { Icons } from "../../../components";
import classes from "./styles.module.css";

type TableHeaderProps = {
  data: string[];
  loading: boolean;
};

const TableHeader: FunctionComponent<TableHeaderProps> = ({
  data,
  loading,
}) => {
  return loading ? (
    <Icons.Loading />
  ) : (
    <thead className={classes.thead}>
      <tr>
        {data.map((h: string) => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    </thead>
  );
};

export { TableHeader };
