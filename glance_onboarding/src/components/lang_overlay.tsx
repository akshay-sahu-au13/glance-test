import { FunctionComponent, h } from "preact";
import {useState} from 'preact/hooks';
import { css } from "goober";
import LanguageData from "../languages/Languages";
import colors from "../styles/colors";
import font from "../styles/font";
import SelectLanguages from "./language_input";



const LanguagesOverlay: FunctionComponent = () => {

    const [selectedLanguages, setSelectedLanguages] = useState(["English"]);

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
    `;
    
    const chooseLang: string = css`
        margin: 2vh auto 0 auto;
        text-align: center;
    `;

    const chooseLang__Title: string = css`
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.3px;
    `;

    const chooseLang__Text:string = css`
        display: block;
        font-size: 14px;
        font-weight: ${font.fontWtLight};
        color: rgba(255, 255, 255, 0.4);
    `;

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

        

    `;

    const SelectLanguages = (e:any) => {
    
        if ( selectedLanguages.includes(e.target.alt)) {
            const idx =  selectedLanguages.indexOf(e.target.alt);
            const copiedArray = selectedLanguages.slice();
            copiedArray.splice(idx, 1);
            setSelectedLanguages(copiedArray);
        } else {
            setSelectedLanguages(selectedLanguages => {
            return [...selectedLanguages, e.target.alt]
        });
        }
    }

    console.log("Selected Languages: ",selectedLanguages);

    return <div className={LanguageOverlay}>
           <div className={chooseLang}>
               <p className={chooseLang__Title}>Choose Languages <span className={chooseLang__Text}>to see content of your choice</span></p> 
           </div>

           <div className={languageTilesContainer}>
                {
                    LanguageData.map((item: {name: string; url: string}, id: number) => {
                        return <div className={languageTile} key={id} >
                            <img src={item.url} alt={item.name} height="145" onClick={SelectLanguages} />
                        </div>
                    })
                }
           </div>
        </div>
};

export default LanguagesOverlay;