import bangla from '../assets/languageFiles/bangla.png';
import english from '../assets/languageFiles/english.png';
import hindi from '../assets/languageFiles/hindi.png';
import kannada from '../assets/languageFiles/kannada.png';
import marathi from '../assets/languageFiles/marathi.png';
import tamil from '../assets/languageFiles/tamil.png';
import telugu from '../assets/languageFiles/telugu.png';
import vidBangla from '../assets/languageFiles/videos/bangla.mp4';
import vidDefault from '../assets/languageFiles/videos/default.mp4';
import vidHindi from '../assets/languageFiles/videos/Hindi.mp4';
import vidKannada from '../assets/languageFiles/videos/kannada.mp4';
import vidMarathi from '../assets/languageFiles/videos/marathi.mp4';
import vidTamil from '../assets/languageFiles/videos/tamil.mp4';
import vidTelugu from '../assets/languageFiles/videos/telugu.mp4';

export const languageDataForImageAndVideo = {
  en: {
    imgUrl: english,
    videoUrl: vidDefault,
  },
  hi: {
    imgUrl: hindi,
    videoUrl: vidHindi,
  },
  bn: {
    imgUrl: bangla,
    videoUrl: vidBangla,
  },
  kn: {
    imgUrl: kannada,
    videoUrl: vidKannada,
  },
  ta: {
    imgUrl: tamil,
    videoUrl: vidTamil,
  },
  te: {
    imgUrl: telugu,
    videoUrl: vidTelugu,
  },
  mr: {
    imgUrl: marathi,
    videoUrl: vidMarathi,
  },
};
