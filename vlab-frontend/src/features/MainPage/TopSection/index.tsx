import Choice from "@/components/Choice";
import { TopSectionStyled } from "./styled";
import { choicelist } from "@/utills/lists";

//images
import bgimg from "@/assets/iamges/SP-intro-back.png";

//top 영역
const TopSection = () => {
  return (
    <TopSectionStyled $bgImg={bgimg.src}>
      <div className="topsection_main">
        {choicelist.map((element, index) => {
          return (
            <Choice
              key={index}
              title={element.title}
              content={element.content}
              imgsrc={element.imgsrc}
            />
          );
        })}
      </div>
    </TopSectionStyled>
  );
};

export default TopSection;
