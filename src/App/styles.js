import styled from "styled-components";

export const Container = styled.div`
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
  }
`;

export const Main = styled.main`
  display: grid;
  padding-top: 64px;
  align-content: center;
  overflow: auto;
`;
