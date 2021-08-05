import { FunctionComponent, h } from "preact";

import CategoryChoices from "./category_choices";
import colors from '../../styles/colors';
import { css } from "goober";
import foodImg from '../../assets/categoryFiles/FoodImage.jpeg';
import moviesImg from '../../assets/categoryFiles/Movies.jpeg';
import newsImg from '../../assets/categoryFiles/National.jpeg';
import sportsImg from '../../assets/categoryFiles/Sports.jpeg';
import { useState } from "preact/hooks";

const summaryContainer = css`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.black};
  color: ${colors.white};
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
`

const heading = css`
  height: 23vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 20px;
  & h3 {
    font-weight: 400;

    & span {
      text-decoration: underline 2px solid ${colors.pink};
      text-underline-offset: 3px;
    }
  };
`


const SelectedCategories: FunctionComponent = () => {

  const [categories, setCategories] = useState([]);

  return <div className={summaryContainer}>

    <div className={heading}>
      <h3>You're <span>all set!</span></h3>
    </div>

    <CategoryChoices bgImg={foodImg} bgColor={`${colors.black1}`} isSelected={true} catg={'Food'} depth={"0"} />
    <CategoryChoices bgImg={moviesImg} bgColor={`${colors.black2}`} isSelected={false} catg={'Movies & TV'} depth={"-15%"} />
    <CategoryChoices bgImg={newsImg} bgColor={`${colors.black3}`} isSelected={true} catg={'National News'} depth={"-30%"} />
    <CategoryChoices bgImg={sportsImg} bgColor={`${colors.black4}`} isSelected={true} catg={'Sports'} depth={"-45%"} />
    <CategoryChoices bgImg={""} bgColor={`${colors.pink}`} isSelected={false} catg={''} depth={"-60%"} />


  </div>
}

export default SelectedCategories;