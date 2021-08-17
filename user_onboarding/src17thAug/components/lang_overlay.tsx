import { FunctionComponent, h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import CheckedCircle from "./checked_circle";
import colors from "../styles/colors";
import { css } from "goober";
import font from "../styles/font";
import { languageDataForImageAndVideo } from "../scripts/constants";
import { sendCustomAnalytics } from "../scripts/glanceJsBridge";

const LanguageOverlay: string = css`
        position: absolute;
        top: 50%;
        left:0;
        height: 50vh;
        width: 100vw;
        display: flex;
        background-color: ${colors.black};
        z-index: 2;
        display:flex;
        flex-direction:column;
        scroll-behavior: smooth;
    `;

const chooseLang: string = css`
    margin: 2vh auto 0 auto;
    text-align: center;
`;

const chooseLang__Title: string = css`
    font-size: ${font.fontLarge};
    line-height: 24px;
    letter-spacing: 0.3px;
    color: ${colors.white};
`;

const chooseLang__Text: string = css`
    display: block;
    font-size: ${font.fontBase};
    font-weight: ${font.fontWtLight};
    color: rgba(255, 255, 255, 0.4);
`;

const languageTilesContainer: string = css`
    
    padding: 0 5vw 50px 5vw;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar {
            display: none;
        }
    @media (min-width: 450px) {
        justify-content: space-between; // for bigger screens i.e ipads, kindle, surface
    }
`;

const languageTile: string = css`
    background-color: ${colors.black};
    display: flex;
    justify-content:center;
    position: relative;
    & .notSelected {
        width: 17vh;
        margin: 10px 5px;
    };
`;
const languageTileSelected: string = css`
    width: 17vh;
    margin: 10px 5px;
    background-color: ${colors.black_2};
    box-shadow: 0 0 0 1px ${colors.white30};
    border-radius: 20px;
`;

interface LanguagesOverlayProps {
    selectLanguages: Function;
    subscribedLanguages: string[];
    allLanguagesData: { displayName: string; id: string; isSubscriptionModifiable: boolean, url: string, video: string }[];
};

const LanguagesOverlay: FunctionComponent<LanguagesOverlayProps> = ({ selectLanguages, subscribedLanguages, allLanguagesData }) => {


    const langOverlay = useRef(null);

    const handleScrollAnalytics = () => {
        console.log("User Scrolled!")
        const eventType = "language_webpeek";
        const extras = {
            action: 'scroll',
            user_scrolled: true
        };
        langOverlay.current?.removeEventListener('scroll', handleScrollAnalytics);
        sendCustomAnalytics({ extras, eventType });
    };

    useEffect(() => {
        langOverlay.current?.addEventListener('scroll', handleScrollAnalytics);
    }, []);

    console.log('subscribedLanguages:', subscribedLanguages)

    return <div className={LanguageOverlay} >
        <div className={chooseLang}>
            <p className={chooseLang__Title}>Choose Languages <span className={chooseLang__Text}>to see content of your choice</span></p>
        </div>

        <div className={languageTilesContainer} ref={langOverlay}>
            {
                allLanguagesData.map((item, index: number) => {
                    return <div className={languageTile} key={index} >
                        {
                            subscribedLanguages.includes(item.id) && <CheckedCircle />
                        }
                        <img src={languageDataForImageAndVideo[item.id].imgUrl} alt={item.id} onClick={() => selectLanguages(item.id)} className={subscribedLanguages.includes(item.id) ? languageTileSelected : "notSelected"} />
                    </div>
                })
            }
            <div className={languageTile} >
                <div className="notSelected" data-desc="placeholder"></div>
            </div>
        </div>
    </div>
};

export default LanguagesOverlay;