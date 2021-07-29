import { FunctionComponent, h } from "preact";
import { css } from "goober";
import colors from '../styles/colors';
import font from '../styles/font';
import arnoldgif from "../assets/Arnold.gif";
import NextButton from "./nextButton";
import LanguagesOverlay from "./lang_overlay";
import GlanceLogoTop from "./glanceLogoTop";
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

    return <div className={Container}>
                <GlanceLogoTop />
                <LanguagesOverlay />
                <NextButton />
            </div>
}


export default SelectLanguages;