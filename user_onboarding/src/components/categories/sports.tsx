import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Sports.svg'
import catg_bg_1 from "../../assets/categoryFiles/sports.gif";

const Sports: FunctionComponent = () => {

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'/food'} />
}

export default Sports;