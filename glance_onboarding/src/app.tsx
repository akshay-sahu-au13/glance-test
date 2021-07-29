import { css } from 'goober';
import { FunctionComponent, h } from 'preact';
import colors from './styles/colors';
import font from './styles/font';
import Router from 'preact-router';
import Screen1 from "./components/onboarding_screen_1";
import Languageinput from "./components/language_input";


const App: FunctionComponent = () => {
  return <Router>
    <Screen1 path="/" />
    <Languageinput path="/lang" />

  </Router>
};

export default App;
