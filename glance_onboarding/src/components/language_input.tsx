import { FunctionComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";

import LanguageData from "../languages/Languages";
import LanguagesOverlay from "./lang_overlay";
import NextButton from "./nextButton";
import VideoSource from "./videoContainer";
import colors from '../styles/colors';
import { css } from "goober";

const Container = css`       
        background: transparent;
        height: 65%;
        color: ${colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
     
        `;
const SelectLanguages: FunctionComponent = () => {
    
       const [selectedLanguages, setSelectedLanguages] = useState(["english"]);
       const [videoUrl, setVideoUrl] = useState("https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4");
        
    //    useEffect(() => {
    //        setVideoUrl("https://img23.ropose.com/video/mvid/FehfUMc/lcX8_41866044697304081582535-c1b7-4864-adde-9b8fa072932b_d6e4cdb3_a833.mp4");
           
    //    }, [])
       console.log(selectedLanguages)
        const selectLanguages = (e: Event, video_url:string) => {
        
            if ( selectedLanguages.includes(e.target.alt)) {
                const idx =  selectedLanguages.indexOf(e.target.alt);
                const copiedArray = selectedLanguages.slice();
                copiedArray.splice(idx, 1);
                setSelectedLanguages(copiedArray);
            } else {
                setVideoUrl(video_url);
                setSelectedLanguages(selectedLanguages => {
                return [...selectedLanguages, e.target.alt]
            });
            }
        };

    return <div className={Container}>
                <VideoSource video_url={videoUrl} video_name={selectedLanguages[selectedLanguages.length-1]} />
                <LanguagesOverlay selectLanguages={selectLanguages} selectedLanguages={selectedLanguages} LanguageData={LanguageData}  />
                <NextButton />
            </div>
}


export default SelectLanguages;