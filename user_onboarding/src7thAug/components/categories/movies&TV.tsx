import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/Movies.svg'
import catg_bg_1 from "../../assets/categoryFiles/deepika.gif";

const MoviesAndTv: FunctionComponent = () => {

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={"/news"} category={'#entertainment'} />
}

export default MoviesAndTv;