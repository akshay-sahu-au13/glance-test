import { FunctionComponent, h } from "preact";
import { getAllLanguages, getAllSubscribedLanguages, glanceMoveToNext, hideNativeUiElementsOfGlance, sendCustomAnalytics, subscribeLanguage, unsubscribeLanguage } from "../scripts/glanceJsBridge";
import { useEffect, useState } from "preact/hooks";

import LanguagesOverlay from "./lang_overlay";
import NextButton from "./nextButton";
import VideoSource from "./videoContainer";
import colors from '../styles/colors';
import { css } from "goober";
import { languageDataForImageAndVideo } from "../scripts/constants";
import { route } from "preact-router";

const Container = css`     
  background: transparent;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;  
    `;
// const Container1 = css`     
//   background: transparent;
//   color: ${colors.white};
//   display: flex;
//   height: 200vh;
//   /* align-items: center;
//   justify-content: center;   */
//   overflow-y: scroll;
//     `;


type LangId = 'en' | 'ta' | 'hi' | 'te' | 'mr' | 'kn' | 'bn';

const SelectLanguages: FunctionComponent = () => {

    const [startTime, setStartTime] = useState(Date.now());
    const [lang, setLang] = useState("");
    const [subscribedLanguages, setSubscribedLanguages] = useState([]);
    const [videoUrl, setVideoUrl] = useState("https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4");
    const [pause, setPause] = useState(false);
    const [allLanguagesData, setAllLanguagesData] = useState([]);

    const webpeekLoadedAnalytics = () => {
        const eventType = "language_webpeek";

        const extras = {
            action: 'webpeek_loaded',
        };
        console.log("Webpeek Loaded!");
        sendCustomAnalytics({ extras, eventType });
    };

    const clickedOnNextAnalytics = () => {
        const eventType = "language_webpeek";

        const extras = {
            action: 'clicked_on_next',
        };
        console.log("Clicked on Next!");
        sendCustomAnalytics({ extras, eventType });
    };

    const totalTimeSpentOnWebpeekAnalytics = (time: number) => {
        const eventType = "language_webpeek";

        const extras = {
            action: 'time_spent_on_webpeek',
            time_spent: `${time} ms`,

        };

        sendCustomAnalytics({ extras, eventType });
    }

    useEffect(() => {
        const subscribedLanguages = getAllSubscribedLanguages();
        console.log("Lang_Webpeek: ", subscribedLanguages);
        setSubscribedLanguages(subscribedLanguages);
        webpeekLoadedAnalytics();
        const LanguageData = JSON.parse(getAllLanguages());
        // [{id:'abc', name:'ABC'}] => {abc:{id: 'abc', name: "ABC"}}
        setAllLanguagesData(LanguageData);
    }, []);                              //TODO - Need to add dependency array for glancejsbridge Availability

    useEffect(() => {
        hideNativeUiElementsOfGlance(['meatballsIcon', 'likeContainer']);   // to hide the native elements 
    }, []);



    const LanguageSubscribedAnalytics = (languageId: string): void => {
        const eventType = "language_webpeek";
        const extras = {
            action: 'language_subscribed',
            languageId: languageId,
        };
        sendCustomAnalytics({ extras, eventType });
    }

    const LanguageUnubscribedAnalytics = (languageId: string): void => {
        const eventType = "language_webpeek";
        const extras = {
            action: 'language_unsubscribed',
            languageId: languageId,
        };
        sendCustomAnalytics({ extras, eventType });
    }

    const selectLanguages = (langId: LangId) => {
        const isModifiable = allLanguagesData.filter((item) => langId === item.id)[0].isSubscriptionModifiable;
        // const test = 
        console.log('allLanguagesData', allLanguagesData);
        console.log("isModifiable: ", isModifiable)
        if (!isModifiable) return;
        if (subscribedLanguages.includes(langId)) {
            unsubscribeLanguage(langId);             // Unubscribing a language
            LanguageUnubscribedAnalytics(langId);   //Analytics for unsubscribed language
            // const idx = subscribedLanguages.indexOf(langId);
            // const copiedArray = subscribedLanguages.slice();
            // copiedArray.splice(idx, 1);
        } else {
            subscribeLanguage(langId);             // SDK js - Subscribing to a new language
            LanguageSubscribedAnalytics(langId);  //Analytics for newly subscribed language
            const videoUrl = languageDataForImageAndVideo[langId].videoUrl;
            setVideoUrl(videoUrl);
            // setSubscribedLanguages(selectedLanguages => ([...selectedLanguages, langId]));
            const Lang = allLanguagesData.filter((item: { displayName: string, id: string, isSubscriptionModifiable: boolean, url: string, video: string }) => (item.id === langId));
            setLang(Lang[0].displayName);

        };
        const updatedLanguageList = getAllSubscribedLanguages();   // need to make a fn for the same
        console.log("Updated Language list after unsubscription: ", updatedLanguageList);
        setSubscribedLanguages(updatedLanguageList);
    };



    const clickedOnNext = () => {
        const endTime = Date.now();
        const totalTimeSpent = endTime - startTime;
        console.log("totalTimeSpent: ", totalTimeSpent, "ms");  // remove the console later
        totalTimeSpentOnWebpeekAnalytics(totalTimeSpent);      //Analytics for total time spent on page
        setPause(true);
        clickedOnNextAnalytics();                              //Analytics for clicked on next btn
        glanceMoveToNext();                                   // SDK js function to kove to next glance
    }

    return <div className={Container}>
        <VideoSource video_url={videoUrl} pause={pause} />
        <LanguagesOverlay selectLanguages={selectLanguages} subscribedLanguages={subscribedLanguages} allLanguagesData={allLanguagesData} />
        <NextButton clickedOnNext={clickedOnNext} lang={lang} setLang={setLang} />
    </div>
}

export default SelectLanguages;