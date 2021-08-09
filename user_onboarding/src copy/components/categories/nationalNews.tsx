import { FunctionComponent, h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/nationalNews.svg'
import catg_bg_1 from "../../assets/categoryFiles/news.gif";
// import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const News: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);

  useEffect(() => {
    if (data['#national_news'] {
      // route('/sports');
      setCurrentScreen('sports');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'sports'} category={'#national_news'} setCurrentScreen={setCurrentScreen} />
}

export default News;