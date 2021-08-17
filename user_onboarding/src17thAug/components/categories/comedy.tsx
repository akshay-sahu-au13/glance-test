import { FunctionComponent, h } from 'preact';
import { getCategorySubscriptions, isCategorySubscribed } from '../../scripts/glanceJsBridge';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/Comedy.svg'
import catg_bg_1 from "../../assets/categoryFiles/comedy.gif";

// import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const Comedy: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  // const CategoryData = useContext(CatgData);
  const CategoryData = JSON.parse(getCategorySubscriptions());

  useEffect(() => {
    if (CategoryData['#comedy']) {
      setCurrentScreen('food');
    }

    // if (isCategorySubscribed('#comedy')) {
    //   setCurrentScreen('food');
    // } else {
    //   if (CategoryData['#comedy']) {
    //     setCurrentScreen('food');
    //   }
    // }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'food'} category={'#comedy'} setCurrentScreen={setCurrentScreen} />
}

export default Comedy;