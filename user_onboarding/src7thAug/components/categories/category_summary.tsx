import { FunctionComponent, h } from 'preact';

import CategoryChoices from './category_choices';
import colors from '../../styles/colors';
import { css } from 'goober';
import foodImg from '../../assets/categoryFiles/FoodImage.jpeg';
import { getCategorySubscriptions } from '../../scripts/glanceJsBridge';
import moviesImg from '../../assets/categoryFiles/Movies.jpeg';
import newsImg from '../../assets/categoryFiles/National.jpeg';
import sportsImg from '../../assets/categoryFiles/Sports.jpeg';
import { useState } from 'preact/hooks';

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

  const catgData = JSON.parse(getCategorySubscriptions());
  const [categories, setCategories] = useState(catgData);
  console.log(categories)
  return <div className={summaryContainer}>

    <div className={heading}>
      <h3>You're <span>all set!</span></h3>
    </div>

    <CategoryChoices bgImg={foodImg} bgColor={`${colors.black1}`} isSelected={categories['#food']} catg={'#food'} name={'Food'} depth={'0'} setCategories={setCategories} categories={categories} />
    <CategoryChoices bgImg={moviesImg} bgColor={`${colors.black2}`} isSelected={categories['#entertainment']} catg={'#entertainment'} name={'Movies & TV'} depth={'-15%'} setCategories={setCategories} categories={categories} />
    <CategoryChoices bgImg={newsImg} bgColor={`${colors.black3}`} isSelected={categories['#national_news']} catg={'#national_news'} name={'National News'} depth={'-30%'} setCategories={setCategories} categories={categories} />
    <CategoryChoices bgImg={sportsImg} bgColor={`${colors.black4}`} isSelected={categories['#sports']} catg={'#sports'} name={'Sports'} depth={'-45%'} setCategories={setCategories} categories={categories} />
    <CategoryChoices bgImg={''} bgColor={`${colors.pink}`} isSelected={false} catg={''} depth={'-60%'} setCategories={setCategories} categories={categories} />

  </div>
}

export default SelectedCategories;