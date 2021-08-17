import { FunctionComponent, h } from 'preact';

import LanguageinputComp from "./components/language_input_main";
import { sendCustomAnalytics } from './scripts/glanceJsBridge';
import { useEffect } from 'preact/hooks';

const App: FunctionComponent = () => {
  useEffect(() => {
    const eventType = 'language_webpeek';
    const extras = { action: 'webpeek_network_mode', networkType: window.navigator.onLine ? 'online' : 'offline', }
    sendCustomAnalytics({ eventType, extras });
  }, [])
  return <LanguageinputComp />
};

export default App;

