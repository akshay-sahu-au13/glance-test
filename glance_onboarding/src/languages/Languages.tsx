import { FunctionComponent, h } from 'preact';
import { styled, css } from 'goober';
import hindi from '../assets/languageOptions/hindi.webp';
import tamil from '../assets/languageOptions/tamil.webp';
import bangla from '../assets/languageOptions/bangla.webp';
import english from '../assets/languageOptions/english_on.webp';
import kannada from '../assets/languageOptions/kannada.webp';
import marathi from '../assets/languageOptions/marathi.webp';
import telugu from '../assets/languageOptions/telugu.webp';


const LanguageData = [
    {name:'tamil', url:tamil},
    {name:'Kannada', url:kannada},
    {name: 'Bangla', url: bangla},
    {name:'Telugu', url: telugu},
    {name: 'Hindi', url: hindi},
    {name:'marathi', url:marathi},
    {name:'English', url:english}
];

export default LanguageData;