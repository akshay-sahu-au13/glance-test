import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Sports.svg'
import catg_bg_1 from "../../assets/categoryFiles/sports.gif";
import { useContext, useEffect } from 'preact/hooks';
import { CatgData } from '../../index';
import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const Sports: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);
  useEffect(() => {
    if (data['#sports'] {
      // route('/food');
      setCurrentScreen('food');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'food'} category={'#sports'} setCurrentScreen={setCurrentScreen} />
}

export default Sports;