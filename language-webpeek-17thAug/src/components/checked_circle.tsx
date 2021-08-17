import { FunctionComponent, h } from "preact";

import check from "../assets/languageFiles/checked.svg";
import colors from "../styles/colors";
import { css } from "goober";

const circle = css `
    height: 14.5%;
    width: 14.5%;
    border-radius: 50%;
    background-color: ${colors.black_3};
    position: absolute;
    top: 14.5%;
    right: 14.5%;
`;
const check_mark = css `
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const CheckedCircle: FunctionComponent = () => {

    return <div className={circle}>
        <div className={check_mark}> <img src={check} alt="check mark" /> </div>
    </div>
};

export default CheckedCircle;