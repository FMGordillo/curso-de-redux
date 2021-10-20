import styled from "styled-components";

const THead = styled.thead`
  text-align: left;
`;

const TableHeader = ({ data, loading }) => {
  return loading ? (
    <div>Hola</div>
  ) : (
    <THead>
      <tr>
        {data.map((h) => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    </THead>
  );
};

export { TableHeader };
