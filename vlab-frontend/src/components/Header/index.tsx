import { HeaderStyled } from "./styled";

//header 제외 페이지
const notPage = [];

//header 컴포넌트
const Header = () => {
  return (
    <HeaderStyled>
      <div className="">로고이미지</div>
      <div>로그인</div>
    </HeaderStyled>
  );
};

export default Header;
