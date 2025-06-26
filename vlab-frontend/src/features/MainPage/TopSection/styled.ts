import styled from "styled-components";

export const TopSectionStyled = styled.div<{ $bgImg: string }>`
  display: flex;
  width: 100%;
  height: 100%;

  .topsection_main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px auto;
    width: 100%;
    height: 600px;
    padding: 50px 0px;

    background: url(${(props) => props.$bgImg}) 50% 40% no-repeat;
    background-size: 120%;
    height: unset;
  }
`;
