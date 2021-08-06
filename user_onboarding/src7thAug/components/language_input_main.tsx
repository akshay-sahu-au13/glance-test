import { FunctionComponent, h } from "preact";
import { getAllSubscribedLanguages, glanceMoveToNext, sendCustomAnalytics, subscribeLanguage, unsubscribeLanguage } from "../scripts/glanceJsBridge";
import { useEffect, useState } from "preact/hooks";

import LanguageData from "../languages/Languages";
import LanguagesOverlay from "./lang_overlay";
import NextButton from "./nextButton";
import VideoSource from "./videoContainer";
import colors from '../styles/colors';
import { css } from "goober";
import { route } from "preact-router";

const Container = css`     
  background: transparent;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;  
    `;
const SelectLanguages: FunctionComponent = () => {

    const [startTime, setStartTime] = useState(null);
    const [lang, setLang] = useState("");
    const subscribedLanguages = getAllSubscribedLanguages();


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
        webpeekLoadedAnalytics();                // Analytics for Webpeek loaded
    }, []);

    useEffect(() => {
        setStartTime(() => (Date.now()));
    }, []);

    console.log("Start Time: ", startTime);

    const [selectedLanguages, setSelectedLanguages] = useState(subscribedLanguages);
    const [videoUrl, setVideoUrl] = useState("https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4");

    console.log(selectedLanguages);

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

    const selectLanguages = (langId: string, video_url: string) => {

        if (langId === 'en') return;

        if (selectedLanguages.includes(langId)) {

            unsubscribeLanguage(langId);             // Unubscribing a language
            LanguageUnubscribedAnalytics(langId);   //Analytics for unsubscribed language

            const idx = selectedLanguages.indexOf(langId);
            const copiedArray = selectedLanguages.slice();
            copiedArray.splice(idx, 1);
            setSelectedLanguages(copiedArray);

        } else {

            subscribeLanguage(langId);             // SDK js - Subscribing to a new language
            LanguageSubscribedAnalytics(langId);  //Analytics for newly subscribed language
            setVideoUrl(video_url);
            setSelectedLanguages(selectedLanguages => ([...selectedLanguages, langId]));
            const Lang = LanguageData.filter((item: { displayName: string, id: string, isSubscriptionModifiable: boolean, url: string, video: string }) => (item.id === langId));
            setLang(Lang[0].displayName);

        };
    };

    const clickedOnNext = () => {
        const endTime = Date.now();
        const totalTimeSpent = endTime - startTime;
        console.log("totalTimeSpent: ", totalTimeSpent, "ms");  // remove the console later
        totalTimeSpentOnWebpeekAnalytics(totalTimeSpent);      //Analytics for total time spent on page
        // route("/catg");
        clickedOnNextAnalytics();                              //Analytics for clicked on next btn
        glanceMoveToNext();                                   // SDK js function to kove to next glance
    }

    return <div className={Container}>
        <VideoSource video_url={videoUrl} video_name={selectedLanguages[selectedLanguages.length - 1]} />
        <LanguagesOverlay selectLanguages={selectLanguages} selectedLanguages={selectedLanguages} LanguageData={LanguageData} />
        <NextButton clickedOnNext={clickedOnNext} lang={lang} setLang={setLang} />
    </div>
}

export default SelectLanguages;