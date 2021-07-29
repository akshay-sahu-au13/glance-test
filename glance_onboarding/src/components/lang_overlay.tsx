import { FunctionComponent, h } from "preact";
import {useState} from 'preact/hooks';
import { css } from "goober";
import LanguageData from "../languages/Languages";
import colors from "../styles/colors";
import font from "../styles/font";



const LanguagesOverlay: FunctionComponent = () => {

    console.log(LanguageData);
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
    `
//     const NextBtn: string = css`
//         padding: 8px 18px;
//         width: 65px;
//         height: 35px;
//         background-color: ${colors.black80};
//         color: ${colors.white};
//         border-radius: 40px;
//         position: absolute;
//         top:50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         z-index: 3;
//         display: flex;
//         justify-content:center;
//         align-items: center;
//         /* box-shadow: 0px 2px 4px rgba(43, 42, 42, 0.3); */
//         box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), inset 0px -1px 4px rgba(255, 255, 255, 0.205), inset 0px 2px 2px rgba(255, 255, 255, 0.253);
//         /* backdrop-filter: blur(0px); */
//         display: flex;
//         justify-content: space-between;
// `

    const chooseLang: string = css`
        margin: 2vh auto 0 auto;
        text-align: center;
    `

    const chooseLang__Title: string = css`
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.3px;
    `
    const chooseLang__Text:string = css`
        display: block;
        font-size: 14px;
        font-weight: ${font.fontWtLight};
        color: rgba(255, 255, 255, 0.4);
    `

    const languageTilesContainer:string = css`
        max-height: 75%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        &::-webkit-scrollbar {
                display: none;
            }

    `;

    const languageTile:string = css `
        width: 50%;
        height: 50%;
        background-color: ${colors.black};
        display: flex;
        justify-content:center;
        align-items: center;

    `

    return <div className={LanguageOverlay}>
           <div className={chooseLang}>
               <p className={chooseLang__Title}>Choose Languages <span className={chooseLang__Text}>to see content of your choice</span></p> 
           </div>

           <div className={languageTilesContainer}>
                {
                    LanguageData.map((item: {name: string; url: string}, id: number) => {
                        return <div className={languageTile} key={id}>
                            <img src={item.url} alt={item.name} height="125" />
                        </div>
                    })
                }
           </div>
        </div>
}

export default LanguagesOverlay;