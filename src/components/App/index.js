import { Main } from "./styles";

function App() {

  const data = [{
    name: "Facu",
    mail: "facu@mail.com",
    link: "a"
  }, {
    name: "Pepe",
    mail: "jorge@mail.com",
    link: "b"
  }];

  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d => <tr key={d.link}>
            <td>{d.name}</td>
            <td>{d.mail}</td>
            <td>{d.link}</td>
          </tr>))}
        </tbody>
      </table>
    </Main>
  );
}

export { App };