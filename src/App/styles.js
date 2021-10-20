import styled from "styled-components";

export const MainContainer = styled.div`
  header {
    position: fixed;
    width: 100%;
    top: 0;
  }
  footer {
    position: fixed;
    width: 100%;
    text-align: center;
    bottom: 0;
    padding: 24px;
    background: hsl(45deg, 30%, 75%);
  }
`;

export const Main = styled.main`
  display: grid;
  padding-top: 64px;
  padding-bottom: 64px;
  align-content: center;
  overflow: auto;
`;
