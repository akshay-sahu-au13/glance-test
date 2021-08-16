import { FunctionComponent, h } from 'preact';
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

  const data = useContext(CatgData);

  useEffect(() => {
    if (data['#comedy'] {
      // route('/sports');
      setCurrentScreen('food');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'food'} category={'#comedy'} setCurrentScreen={setCurrentScreen} />
}

export default Comedy;