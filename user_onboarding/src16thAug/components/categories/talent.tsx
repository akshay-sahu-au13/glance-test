import { FunctionComponent, h } from 'preact';
import { getCategorySubscriptions, isCategorySubscribed } from '../../scripts/glanceJsBridge';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/Talent.svg'
import catg_bg_1 from "../../assets/categoryFiles/talent.gif";

interface Props {
  setCurrentScreen: Function;
};

const Talent: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  // const CategoryData = useContext(CatgData);
  const CategoryData = JSON.parse(getCategorySubscriptions());

  useEffect(() => {

    if (CategoryData['#talent']) {
      setCurrentScreen('comedy');
    }
    // if (isCategorySubscribed('#talent')) {
    //   setCurrentScreen('comedy');
    // } else {
    //   if (CategoryData['#talent']) {
    //     setCurrentScreen('comedy');
    //   }
    // }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'comedy'} category={'#talent'} setCurrentScreen={setCurrentScreen} />
}

export default Talent;