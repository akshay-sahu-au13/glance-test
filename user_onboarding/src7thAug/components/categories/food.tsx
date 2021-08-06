import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Food.svg'
import catg_bg_1 from '../../assets/categoryFiles/food.gif';

const Food: FunctionComponent = () => {

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'/confetti'} category={'#food'} />
}

export default Food;