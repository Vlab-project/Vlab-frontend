import styled from "styled-components";

export const NaviStyled = styled.div<{ bgc: string; color: string }>`
  width: 100%;
  height: 440px;
  background-color: ${(props) => props.bgc};
  color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px;

  .navi_main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .navi_title {
      font-size: 28px;
      line-height: 28px;
      letter-spacing: -0.04rem;
      font-weight: 800;
    }
    .navi_content {
      max-width: 200px;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.04rem;
      font-weight: 400;
      line-height: 22px;
      white-space: nowrap;
    }
  }

  .navi_img {
    width: 270px;
    height: 360px;

    .navi_imgstyle {
      width: 100%;
      height: 100%;
    }
  }
`;
