import { FunctionComponent, h } from 'preact';
import { css, styled } from 'goober';

import bangla from '../assets/languageFiles/bangla.png';
import english from '../assets/languageFiles/english.png';
import hindi from '../assets/languageFiles/hindi.png';
import kannada from '../assets/languageFiles/kannada.png';
import marathi from '../assets/languageFiles/marathi.png';
import tamil from '../assets/languageFiles/tamil.png';
import telugu from '../assets/languageFiles/telugu.png';

const LanguageData = [
    {name:'tamil', url:tamil, video: "https://img23.ropose.com/video/mvid/kARb5Nc/2w2T_53378078241824ab4cc97f-1d36-4315-b144-584f81069a9c_d53edfbe_a814.mp4"},
    {name:'kannada', url:kannada, video: "https://img23.ropose.com/video/mvid/dlLywOc/rhgw_306037307848002194af52-4b0a-43ba-9be1-9fb3d795d895_db1930b7_a841.mp4"},
    {name: 'bangla', url: bangla, video: "https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4"},
    {name:'telugu', url: telugu, video: "https://img23.ropose.com/video/mvid/dlLywOc/rhgw_306037307848002194af52-4b0a-43ba-9be1-9fb3d795d895_db1930b7_a841.mp4" },
    {name: 'hindi', url: hindi, video: "https://img23.ropose.com/video/mvid/kARb5Nc/2w2T_53378078241824ab4cc97f-1d36-4315-b144-584f81069a9c_d53edfbe_a814.mp4"},
    {name:'marathi', url:marathi, video: "https://img23.ropose.com/video/mvid/dlLywOc/rhgw_306037307848002194af52-4b0a-43ba-9be1-9fb3d795d895_db1930b7_a841.mp4"},
    {name:'english', url:english, video: "https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4"}
];

export default LanguageData;