import { FunctionComponent, h } from "preact";

import colors from '../styles/colors';
import { css } from "goober";
import rightArrow from '../assets/arrow.webp';
import { useEffect } from "preact/hooks";

interface NextBtnProps {
    clickedOnNext: Function;
    lang: string;
    setLang: Function
}

const NextButton: FunctionComponent<NextBtnProps> = ({ clickedOnNext, lang, setLang }) => {

    const NextBtn = css`
        padding: 5px 16px;
        width: max-content;
        height: 30px;
        font-size:16px;
        background-color: rgba(0, 0, 0, 0.9);
        color: ${colors.white};
        text-decoration: none;
        border-radius: 40px;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        display: flex;
        justify-content:center;
        align-items: center;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 2px rgba(255, 255, 255, 0.205), inset 0px 1px 2px rgba(255, 255, 255, 0.253);
        display: flex;
        justify-content: space-between;
        transition: all 0.3s ease;

        & span {
            text-transform: capitalize;
        }
        `;
    useEffect(() => {
        if (lang !== "") {
            setTimeout(() => {
                setLang("");
            }, 2500);
        };
    }, [lang]);

    return <div onClick={clickedOnNext} className={NextBtn}>
        {lang ? <div>👏 You are subscribed to <span>{lang}</span></div>
            : <div> Next <img src={rightArrow} alt="right arrow" height="14" /> </div>}
    </div>

};

export default NextButton;