import { FunctionComponent, h } from 'preact';
import { getCategorySubscriptions, isCategorySubscribed } from '../../scripts/glanceJsBridge';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/nationalNews.svg'
import catg_bg_1 from "../../assets/categoryFiles/news.gif";

interface Props {
  setCurrentScreen: Function;
};

const News: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  // const CategoryData = useContext(CatgData);
  const CategoryData = JSON.parse(getCategorySubscriptions());

  useEffect(() => {
    if (CategoryData['#news']) {
      setCurrentScreen('sports');
    }

    // if (isCategorySubscribed('#news')) {
    //   setCurrentScreen('sports');
    // } else {
    //   if (CategoryData['#news']) {
    //     setCurrentScreen('sports');
    //   }
    // }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'sports'} category={'#news'} setCurrentScreen={setCurrentScreen} />
}

export default News;