import { FunctionComponent, h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import CategoryLayout from './category_layout';
import { CatgData } from '../../index';
import catgIcon from '../../assets/categoryFiles/Talent.svg'
import catg_bg_1 from "../../assets/categoryFiles/talent.gif";
// import { route } from 'preact-router';

interface Props {
  setCurrentScreen: Function;
};

const Talent: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const data = useContext(CatgData);

  useEffect(() => {
    if (data['#talent'] {
      // route('/sports');
      setCurrentScreen('comedy');
    }
  }, []);

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'comedy'} category={'#talent'} setCurrentScreen={setCurrentScreen} />
}

export default Talent;