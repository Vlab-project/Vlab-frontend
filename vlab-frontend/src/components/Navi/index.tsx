import { NaviStyled } from "./styled";

interface NaviType {
  title: string;
  content: string;
  imgsrc: any;
  bgc: string;
  color: string;
}

//navigation elements 영역
const Navi = ({ title, content, imgsrc, bgc, color }: NaviType) => {
  return (
    <NaviStyled bgc={bgc} color={color}>
      <div className="navi_main">
        <div className="navi_title">{title}</div>
        <div className="navi_content">{content}</div>
      </div>
      <div className="navi_img">
        <img className="navi_imgstyle" src={imgsrc.src} alt="img" />
      </div>
    </NaviStyled>
  );
};

export default Navi;
