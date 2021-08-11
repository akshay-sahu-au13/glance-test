import { FunctionComponent, h } from 'preact';

import CategoryChoices from './category_choices';
import SummaryPageCta from './summaryPageCta';
import colors from '../../styles/colors';
import comedyImg from '../../assets/categoryFiles/Comedy.jpeg';
import { css } from 'goober';
import foodImg from '../../assets/categoryFiles/FoodImage.jpeg';
import { getCategorySubscriptions } from '../../scripts/glanceJsBridge';
import moviesImg from '../../assets/categoryFiles/Movies.jpeg';
import newsImg from '../../assets/categoryFiles/National.jpeg';
import sportsImg from '../../assets/categoryFiles/Sports.jpeg';
import talentImg from '../../assets/categoryFiles/Talent.jpeg';
import { useState } from 'preact/hooks';

const outerContainer = css`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
`;

const summaryContainer = css`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.black};
  color: ${colors.white};
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

const heading = css`
  height: 21vh;
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
  console.log(categories);
  const [startTime, setStartTime] = useState(Date.now());
  return <div className={outerContainer}>
    <div className={summaryContainer}>
      <div className={heading}>
        <h3>You're <span>all set!</span></h3>
      </div>
      <CategoryChoices bgImg={foodImg} bgColor={`${colors.black1}`} isSelected={categories['#food']} catg={'#food'} name={'Food'} depth={'0%'} setCategories={setCategories} categories={categories} startTime={startTime} />
      <CategoryChoices bgImg={moviesImg} bgColor={`${colors.black2}`} isSelected={categories['#entertainment']} catg={'#entertainment'} name={'Movies & TV'} depth={'15%'} setCategories={setCategories} categories={categories} startTime={startTime} />
      <CategoryChoices bgImg={newsImg} bgColor={`${colors.black3}`} isSelected={categories['#national_news']} catg={'#national_news'} name={'National News'} depth={'30%'} setCategories={setCategories} categories={categories} startTime={startTime} />
      <CategoryChoices bgImg={talentImg} bgColor={`${colors.black4}`} isSelected={categories['#talent']} catg={'#talent'} name={'Talent'} depth={'45%'} setCategories={setCategories} categories={categories} startTime={startTime} />
      <CategoryChoices bgImg={comedyImg} bgColor={`${colors.black5}`} isSelected={categories['#comedy']} catg={'#comedy'} name={'Comedy'} depth={'60%'} setCategories={setCategories} categories={categories} startTime={startTime} />
      <CategoryChoices bgImg={sportsImg} bgColor={`${colors.black6}`} isSelected={categories['#sports']} catg={'#sports'} name={'Sports'} depth={'75%'} setCategories={setCategories} categories={categories} startTime={startTime} />
    </div>
    <SummaryPageCta bgColor={`${colors.pink}`} startTime={startTime} />
  </div>
}

export default SelectedCategories;