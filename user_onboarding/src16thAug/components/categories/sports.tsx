import { FunctionComponent, h } from 'preact';
import { getCategorySubscriptions, isCategorySubscribed } from '../../scripts/glanceJsBridge';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/Sports.svg'
import catg_bg_1 from "../../assets/categoryFiles/sports.gif";
import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const Sports: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  // const CategoryData = useContext(CatgData);
  const CategoryData = JSON.parse(getCategorySubscriptions());
  useEffect(() => {
    if (CategoryData['#sports']) {
      setCurrentScreen('talent');
    }

    // if (isCategorySubscribed('#sports')) {
    //   setCurrentScreen('talent');
    // } else {
    //   if (CategoryData['#sports']) {
    //     setCurrentScreen('talent');
    //   }
    // }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'talent'} category={'#sports'} setCurrentScreen={setCurrentScreen} />
}

export default Sports;