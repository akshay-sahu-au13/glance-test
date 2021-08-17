import { FunctionComponent, h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import backgroundImg from '../../assets/categoryFiles/catg_bg_1.png';
import colors from "../../styles/colors";
import countDownLottie from '../../lotties/countdown.json';
import { css } from "goober";
import lottie from 'lottie-web';
import { sendCustomAnalytics } from "../../scripts/glanceJsBridge";

const categoryContainer = css`
  background: ${colors.black};
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x:hidden;
  overflow-y: hidden;
`;

const textAtBottom = css`
  height: 145px;
  width: 120%;
  position: absolute;
  bottom:0%;
  left:0;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
  letter-spacing: 0.8px;
  background-color: rgba(131, 127, 127, 0.233);
  border-radius: 100% 100% 0 0;
  transform: translateX(-8%);
  z-index:3;
`;

const underlined = css`
  text-decoration: underline 2px solid  ${colors.pink};
  text-underline-offset: 5px;
`;

const lottiePlayer = css`
  width:100%;
  height: 30%;
`;

const lotties = css`
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: -10%;
  left: 0;
  z-index: 2;
`;

interface Props {
  setCurrentScreen: Function;
};

const Categories: FunctionComponent<Props> = ({ setCurrentScreen }) => {

  const lottieRef = useRef(null);
  const playerRef = useRef(null);

  // const onCompleteEvent = () => {
  //   setTimeout(() => {
  //     setCurrentScreen('entertainment');
  //   }, 300);
  // };

  useEffect(() => {
    const eventType = "category_webpeek";
    const extras = {
      action: "webpeek_loaded"
    };

    sendCustomAnalytics({ eventType, extras });          // Analytics for webpeek loaded

    if (playerRef.current) {
      lottieRef.current = lottie.loadAnimation({
        container: playerRef.current,
        loop: false,
        autoplay: true,
        renderer: 'svg',
        animationData: countDownLottie,
      })
      // .addEventListener('complete', onCompleteEvent);
    };

    setTimeout(() => {
      setCurrentScreen('entertainment');
    }, 2000);
  }, []);

  return <div className={categoryContainer}>
    <div ref={lottieRef} className={lotties}>
      <div ref={playerRef} className={lottiePlayer}></div>
    </div>
    <div className={textAtBottom}>
      <p>Tell us <span className={underlined}>what you like</span></p>
    </div>
  </div>
};

export default Categories;

