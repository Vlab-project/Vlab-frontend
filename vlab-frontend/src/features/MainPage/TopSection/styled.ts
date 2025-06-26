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

    background-image: url(${(props) => props.$bgImg});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
