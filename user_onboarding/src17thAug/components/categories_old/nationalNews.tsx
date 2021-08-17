import { FunctionComponent, h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/nationalNews.svg'
import catg_bg_1 from "../../assets/categoryFiles/news.gif";


interface Props {
  setCurrentScreen: Function;
};

const News: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);

  useEffect(() => {
    if (data['#news'] {
      setCurrentScreen('sports');
    } else {
      console.log()
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'sports'} category={'#news'} setCurrentScreen={setCurrentScreen} />
}

export default News;