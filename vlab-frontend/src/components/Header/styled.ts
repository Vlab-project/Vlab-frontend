import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  gap: 15px;

  .header_logo,
  .header_login {
    display: block;
    cursor: pointer;
  }

  .header_login {
    font-size: 12px;
  }
`;
