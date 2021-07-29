import { FunctionComponent, h } from "preact";
import { css } from "goober";
import colors from '../styles/colors';
import rightArrow from '../assets/arrow.webp';


const NextButton: FunctionComponent = () => {

       const NextBtn = css`
        padding: 5px 16px;
        width: 60px;
        height: 30px;
        font-size:16px;
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
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -1px 4px rgba(255, 255, 255, 0.205), inset 0px 2px 2px rgba(255, 255, 255, 0.253);
        /* backdrop-filter: blur(0px); */
        display: flex;
        justify-content: space-between;

        `;

    return <div className={NextBtn}><span>Next</span> <img src={rightArrow} alt="right arrow" height="14" /></div>
};

export default NextButton;