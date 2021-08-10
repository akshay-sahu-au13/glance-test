import { FunctionComponent, h } from "preact";
import { css } from "goober";
import glanceLogoPink from '../assets/glance_logo_pink.svg';

const GlanceLogoTop: FunctionComponent = () => {

    const glanceLogoTop = css`
        position: absolute;
        top: 4.75vh;
        left: 3.5vw;
    `;

    

    return <div className={glanceLogoTop}> 
        <img src={glanceLogoPink} alt="glance logo pink" /> 
        <div className="ProgressBar">
            <div className="bar1"></div>
            <div className="bar2"></div>
        </div>
        </div>

};

export default GlanceLogoTop;