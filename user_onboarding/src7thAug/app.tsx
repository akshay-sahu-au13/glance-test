import { FunctionComponent, h } from 'preact';

import Categories from './components/categories/categories';
import Confetti from './components/categories/confetti';
import Food from './components/categories/food';
import Languageinput from "./components/language_input";
import LanguageinputComp from "./components/language_input_main";
import MoviesAndTv from './components/categories/movies&TV';
import NationalNews from './components/categories/nationalNews';
import Router from 'preact-router';
import Screen1 from "./components/onboarding_screen_1";
import SelectedCategories from './components/categories/category_summary';
import Sports from './components/categories/sports';

const App: FunctionComponent = () => {
  // return <LanguageinputComp />
  return <Router>
    {/* <Screen1 path="/" />
    <Languageinput path="/lang" /> */}
    <LanguageinputComp path="/" />
    <Categories path="/catg" />
    <MoviesAndTv path="/moviesandtv" />
    <NationalNews path="/news" />
    <Sports path="/sports" />
    <Food path="/food" />
    <SelectedCategories path="/selected" />
    <Confetti path="/confetti" />
  </Router>
};

export default App;



