import { FunctionComponent, h } from 'preact';

import CategoryLayout from './category_layout';
import catgIcon from '../../assets/categoryFiles/nationalNews.svg'
import catg_bg_1 from "../../assets/categoryFiles/news.gif";

const News: FunctionComponent = () => {

  return <CategoryLayout bgImg={catg_bg_1} categoryIcon={catgIcon} nextPage={'/sports'} />
}

export default News;