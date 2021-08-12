import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import glance_logo from "../assets/glance-logo.svg";
import font from "../styles/font";

const GlanceBLock = css`
    padding: 10px 16px;
    position: absolute;
    left: 0;
    bottom: 8%;
    width: 85%;
    height: 61px;
    backdrop-filter: blur(10px);
    border-radius: 0 16px 16px 0;
    background: rgba(163, 160, 159, 0.5);
    display: flex;
    justify-content:space-between;
    align-items: center;
    z-index: 5;
`;

const leftContent = css`
    flex-basis: 60%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const text = css`
    font-size: ${font.fontBase};
    font-weight: ${font.fontWtLight};
    line-height:18px;
    letter-spacing: 0.3px;
`;

const callToAction = css`
    padding:  8px;
    flex-basis: 30%;
    font-size: ${font.fontBase};
    font-weight: ${font.fontWtNormal};
    border-radius: 8px;
    background-color: rgba(26, 25, 25, 0.4);
    text-align: center;
    max-width: 150px;
    text-decoration: none;
    & .know_more {
        text-decoration: none;
        color: #fff;
    }
    &:active {
        transform: translateY(1px);
        box-shadow: 1px 1px 5px rgba(163, 163, 163, 0.521), -1px -1px 5px rgba(163, 163, 163, 0.521);
    }
`;



const glanceLogo = css`
    /* filter: drop-shadow(0px 0px 0px #ffffff); */
`;

const Glance_block: FunctionComponent = () => {
    return <div className={GlanceBLock}>
        <div className={leftContent}>
            <div className={text}>
                What new things do you want to discover daily?
            </div>
            <div className={glanceLogo} >
                <img src={glance_logo} alt="glance logo" height="15"/>
            </div>
        </div>

        <div className={callToAction}>
            <a className="know_more" href="#">KNOW MORE</a>
        </div>
    
  </div>;
}

export default Glance_block;