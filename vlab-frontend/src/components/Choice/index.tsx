import { ChoiceStyled } from "./styled";

//images
import bgimg from "@/assets/iamges/SP-img-slide-backgourd.png";

interface ChioceType {
  title: string;
  content: string;
  imgsrc: any;
}

//top 영역
const Choice = ({ title, content, imgsrc }: ChioceType) => {
  return (
    <ChoiceStyled $bgImg={bgimg.src}>
      <div className="Choice_main">
        <div className="Choice_title">{title}</div>
        <div>{content}</div>
        <div>
          <img src={imgsrc.src} alt="bottom-img" />
        </div>
      </div>
    </ChoiceStyled>
  );
};

export default Choice;
