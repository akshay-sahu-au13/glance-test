import { FunctionComponent, h } from 'preact';
import { css, styled } from 'goober';

import bangla from '../assets/languageFiles/bangla.png';
import english from '../assets/languageFiles/english.png';
import { getAllLanguages } from '../scripts/glanceJsBridge';
import hindi from '../assets/languageFiles/hindi.png';
import kannada from '../assets/languageFiles/kannada.png';
import marathi from '../assets/languageFiles/marathi.png';
import tamil from '../assets/languageFiles/tamil.png';
import telugu from '../assets/languageFiles/telugu.png';

const LanguageData = JSON.parse(getAllLanguages());

const FinalData = LanguageData.map((item: { displayName: string, id: string, isSubscriptionModifiable: boolean, url: string, video: string }) => {
    if (item.displayName === "bangla") {
        item['url'] = bangla;
        item['video'] = "https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4"
    } else if (item.displayName === "english") {
        item['url'] = english;
        item['video'] = "https://img23.ropose.com/video/mvid/dlLywOc/rhgw_306037307848002194af52-4b0a-43ba-9be1-9fb3d795d895_db1930b7_a841.mp4"
    } else if (item.displayName === "tamil") {
        item['url'] = tamil;
        item['video'] = "https://img23.ropose.com/video/mvid/kARb5Nc/2w2T_53378078241824ab4cc97f-1d36-4315-b144-584f81069a9c_d53edfbe_a814.mp4"
    } else if (item.displayName === "kannada") {
        item['url'] = kannada;
        item['video'] = "https://img23.ropose.com/video/mvid/se7IcGO/4891603346425566743896_351C3684_i461.mp4"
    } else if (item.displayName === "telugu") {
        item['url'] = telugu;
        item['video'] = "https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4"
    } else if (item.displayName === "hindi") {
        item['url'] = hindi;
        item['video'] = "https://img23.ropose.com/video/mvid/dlLywOc/rhgw_306037307848002194af52-4b0a-43ba-9be1-9fb3d795d895_db1930b7_a841.mp4"
    } else if (item.displayName === "marathi") {
        item['url'] = marathi;
        item['video'] = "https://img23.ropose.com/video/mvid/kARb5Nc/2w2T_53378078241824ab4cc97f-1d36-4315-b144-584f81069a9c_d53edfbe_a814.mp4"
    }

    return item;
});


export default LanguageData;