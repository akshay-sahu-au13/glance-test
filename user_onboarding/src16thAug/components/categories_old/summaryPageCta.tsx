import { FunctionComponent, h } from "preact";
import { glanceMoveToNext, sendCustomAnalytics } from "../../scripts/glanceJsBridge";
import { useEffect, useRef } from "preact/hooks";

import { css } from "goober";
import endCTA from '../../lotties/endCTA.json';
import lottie from 'lottie-web';

const lottiePlayer = css`
  width:100%;
  position: absolute;
  height: 50%;
`;

const lotties = css`
  width: 200%;
  height: 100%;
  position: absolute;
  top: 3.5%;
  left: -50%;
`;

interface Props {
  bgColor: string,
  startTime: number
};

const SummaryPageCta: FunctionComponent<Props> = ({ bgColor, startTime }) => {


  const container = css`
    height: 18vh;
    width: 120%;
    position: absolute;
    bottom:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100% 100% 0 0;
    transform: translateX(-8%);
    z-index:9;
    background-color: ${bgColor};
    /* transform: translateX(-25%); */
`;

  const playerRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      lottieRef.current = lottie.loadAnimation({
        container: playerRef.current,
        loop: true,
        autoplay: true,
        renderer: 'svg',
        animationData: endCTA,
      })
    };
  }, []);

  const eventType: string = 'category_webpeek';
  const actions: {
    sub: string;
    unSub: string;
    time_spent: string,
  } = {
    sub: 'category_subscribed',
    unSub: 'category_unsubscribed',
    time_spent: `time_spent_on_category_summary_page`,
  };


  const handleLottieClick = () => {
    const endTime = Date.now() - startTime;
    console.log("Start time: ", startTime, "endTime", endTime);
    const extras = { action: actions.time_spent, total_time: `${endTime} ms` };
    sendCustomAnalytics({ eventType, extras });
    glanceMoveToNext();
  };

  return <div className={container}>
    <div ref={lottieRef} className={lotties}>
      <div onClick={handleLottieClick} ref={playerRef} className={lottiePlayer}></div>
    </div>
  </div>
};

export default SummaryPageCta;