import { FunctionComponent, h } from 'preact';
import { getCategorySubscriptions, isCategorySubscribed } from '../../scripts/glanceJsBridge';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/Movies.svg'
import catg_bg_1 from "../../assets/categoryFiles/deepika.gif";
import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const MoviesAndTv: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  // const CategoryData = useContext(CatgData);
  const CategoryData = JSON.parse(getCategorySubscriptions());

  useEffect(() => {

    if (CategoryData['#entertainment']) {
      // route('/news');
      setCurrentScreen('news');
    };

    // if ( isCategorySubscribed('#entertainment')) {
    //   setCurrentScreen('news');
    // } else {
    //   if (CategoryData['#entertainment']) {
    //     // route('/news');
    //     setCurrentScreen('news');
    //   };
    // }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={"news"} category={'#entertainment'} setCurrentScreen={setCurrentScreen} />
}

export default MoviesAndTv;