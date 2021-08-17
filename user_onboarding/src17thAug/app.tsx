import { FunctionComponent, createContext, h } from 'preact';
import { checkGlanceInterface, getCategorySubscriptions, hideNativeUiElementsOfGlance, sendCustomAnalytics } from './scripts/glanceJsBridge';
import { useEffect, useState } from 'preact/hooks';

import Categories from './components/categories/categories';
import Comedy from './components/categories/comedy';
import Confetti from './components/categories/confetti';
import Food from './components/categories/food';
import Languageinput from "./components/language_input";
import LanguageinputComp from "./components/language_input_main";
import MoviesAndTv from './components/categories/movies&TV';
import NationalNews from './components/categories/nationalNews';
import News from './components/categories/nationalNews';
import Router from 'preact-router';
import Screen1 from "./components/onboarding_screen_1";
import SelectedCategories from './components/categories/category_summary';
import Sports from './components/categories/sports';
import Talent from './components/categories/talent';

const App: FunctionComponent = () => {

  const [currentScreen, setCurrentScreen] = useState('categories');

  useEffect(() => {
    // const eventType = 'language_webpeek';
    const eventType = 'category_webpeek';
    const extras = { action: 'webpeek_network_mode', networkType: window.navigator.onLine ? 'online' : 'offline', }
    sendCustomAnalytics({ eventType, extras });
    setInterval(() => {
      hideNativeUiElementsOfGlance(['meatballsIcon', 'likeContainer']);
    }, 100);

  }, []);

  if (currentScreen === 'categories') {
    return <Categories setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'entertainment') {
    return <MoviesAndTv setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'food') {
    return <Food setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'news') {
    return <NationalNews setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'sports') {
    return <Sports setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'confetti') {
    return <Confetti setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'selected') {
    return <SelectedCategories />
  } else if (currentScreen === 'comedy') {
    return <Comedy setCurrentScreen={setCurrentScreen} />
  } else if (currentScreen === 'talent') {
    return <Talent setCurrentScreen={setCurrentScreen} />
  }

  // return <Categories />
  // return <LanguageinputComp />

};

export default App;
