import Navi from "@/components/Navi";
import { NavigateStyled } from "./styled";
import { Navi_list } from "@/utills/lists";

//Navigate 페이지 컴포넌트
const Navigate = () => {
  return (
    <NavigateStyled>
      {Navi_list.map((element) => {
        return (
          <Navi
            title={element.title}
            content={element.content}
            imgsrc={element.imgsrc}
            bgc={element.bgc}
            color={element.color}
          />
        );
      })}
    </NavigateStyled>
  );
};

export default Navigate;
