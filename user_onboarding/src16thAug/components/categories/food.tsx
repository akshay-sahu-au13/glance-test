import { FunctionComponent, h } from 'preact';
import { getCategorySubscriptions, isCategorySubscribed } from '../../scripts/glanceJsBridge';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/Food.svg'
import catg_bg_1 from '../../assets/categoryFiles/food.gif';

interface Props {
  setCurrentScreen: Function;
};

const Food: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  // const CategoryData = useContext(CatgData);
  const CategoryData = JSON.parse(getCategorySubscriptions());
  useEffect(() => {
    if (CategoryData['#food']) {
      setCurrentScreen('confetti');
    }


    // if (isCategorySubscribed('#entertainment')) {
    //   setCurrentScreen('news');
    // } else {
    //   if (CategoryData['#food']) {
    //     setCurrentScreen('confetti');
    //   }
    // }

  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'confetti'} category={'#food'} setCurrentScreen={setCurrentScreen} />
}

export default Food;