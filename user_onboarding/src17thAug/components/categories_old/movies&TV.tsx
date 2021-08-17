import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Movies.svg'
import catg_bg_1 from "../../assets/categoryFiles/deepika.gif";
import { useContext, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { CatgData } from '../../index';

interface Props {
  setCurrentScreen: Function;
};

const MoviesAndTv: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);
  useEffect(() => {
    if (data['#entertainment'] {
      // route('/news');
      setCurrentScreen('news');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={"news"} category={'#entertainment'} setCurrentScreen={setCurrentScreen} />
}

export default MoviesAndTv;