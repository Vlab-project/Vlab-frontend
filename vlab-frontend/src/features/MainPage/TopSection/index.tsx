import Choice from "@/components/Choice";
import { TopSectionStyled } from "./styled";

//images
import bgimg from "@/assets/iamges/SP-intro-back.png";
import slide2 from "@/assets/iamges/SP-img-slide-2.svg";

//choice 컴포넌트에 사용될 배열
const choicelist = [
  {
    id: 1,
    title: "Relation Family",
    content: "과연 나의 가족이 맞을까요?",
    imgsrc: slide2,
  },
  {
    id: 2,
    title: "Similar Celebrity",
    content: "나와 비슷한 연예인은?",
    imgsrc: slide2,
  },
  {
    id: 3,
    title: "Info",
    content: "내 정보를 확인해보자",
    imgsrc: slide2,
  },
];

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
