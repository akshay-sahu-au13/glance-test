import { FunctionComponent, h } from "preact";
import { css, styled } from "goober";
import colors from '../styles/colors';
import font from '../styles/font';
import arnoldgif from "../assets/Arnold.gif";
import rightArrow from '../assets/right_arrow_white.png';
import glanceLogoPink from '../assets/glance_logo_pink.svg';
import tamil from '../assets/languageOptions/hindi.webp';

import LanguagesOverlay from "./lang_overlay";

const SelectLanguages: FunctionComponent = () => {
    
    const Container = css`       
        background-image: url(${arnoldgif});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        height: 65%;
        color: ${colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${font.fontLarge};
        `;

    const NextBtn = css`
        padding: 8px 18px;
        width: 65px;
        height: 35px;
        background-color: ${colors.black80};
        color: ${colors.white};
        border-radius: 40px;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        display: flex;
        justify-content:center;
        align-items: center;
        /* box-shadow: 0px 2px 4px rgba(43, 42, 42, 0.3); */
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -1px 4px rgba(255, 255, 255, 0.205), inset 0px 2px 2px rgba(255, 255, 255, 0.253);
        /* backdrop-filter: blur(0px); */
        display: flex;
        justify-content: space-between;
    `

    const glanceLogoTop = css`
        position: absolute;
        top: 4.75vh;
        left: 3.5vw;
    `

    return <div className={Container}>

        <div className={glanceLogoTop}> <img src={glanceLogoPink} alt="glance logo pink" /> </div>
        <LanguagesOverlay />
        <div className={NextBtn}><span>Next</span> <img src={rightArrow} alt="right arrow" height="14" /></div>
    </div>
}


export default SelectLanguages;