import styled from "styled-components";

export const ChoiceStyled = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 300px;
  background-image: url(${(props) => props.$bgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  aspect-ratio: 408 / 627;

  .Choice_main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    text-align: center;
    gap: 50px;
    .Choice_title {
      font-size: 70px;
      line-height: 70px;
      letter-spacing: -0.15rem;
      font-weight: 400;
    }
  }
`;
