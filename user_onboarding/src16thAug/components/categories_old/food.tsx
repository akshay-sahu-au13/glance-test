import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Food.svg'
import catg_bg_1 from '../../assets/categoryFiles/food.gif';
import { CatgData } from '../../index';
import { useContext, useEffect } from 'preact/hooks';

interface Props {
  setCurrentScreen: Function;
};

const Food: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);
  useEffect(() => {
    if (data['#food'] {
      setCurrentScreen('confetti');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'confetti'} category={'#food'} setCurrentScreen={setCurrentScreen} />
}

export default Food;