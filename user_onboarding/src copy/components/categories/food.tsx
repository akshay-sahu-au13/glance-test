import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Food.svg'
import catg_bg_1 from '../../assets/categoryFiles/food.gif';
import { CatgData } from '../../index';
import { useContext, useEffect } from 'preact/hooks';
import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const Food: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);
  useEffect(() => {
    if (data['#food'] {
      // route('/selected');
      setCurrentScreen('confetti');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'confetti'} category={'#food'} setCurrentScreen={setCurrentScreen} />
}

export default Food;