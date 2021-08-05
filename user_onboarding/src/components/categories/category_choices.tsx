import { FunctionComponent, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";


import { css, keyframes } from "goober";
import endCTA from '../../lotties/end_CTA.json';
import lottie from 'lottie-web';

const rotate = keyframes`
  from {
    transform: rotate(-10deg) translateX(-20%);
  }

  to {
    transform: rotate(0deg) translateX(0%);
  }
`

const bgImage = css`
    width: 100vw;
    opacity: 0.6;
    animation: ${rotate} 0.3s linear;
  `;

const bgImageHidden = css`
  opacity: 0;
  transition: 0.4s ease-out;
`;

const catg_container_item = css`
    position: relative;
    & .catgs {
      position: absolute;
      top: 3%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & p {
        width: 200px;
        font-size: 18px;
        margin: 8px 0;
        letter-spacing: 0.5px;
        text-align: center;
        @media (min-width: 450px) {
          
          width: 200px;
          font-size: 20px;
          margin: 10px 0;
          text-align: center;
          
        }
      }

      & button {
        border: none;
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        padding: 7px 10px;
        border-radius: 50px;
        font-size: 85%;
        width: 85px;
        & span {
          display: inline-block;
          padding-right: 3px;
        }
        @media (min-width: 450px) {
          border: none;
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          padding: 10px 15px;
          border-radius: 50px;
          font-size: 90%;
          width: 95px;
        }
      }
    }
  `;

const lottiePlayer = css`
  width:100%;
  position: absolute;
  height: 30%;
`;

const lotties = css`
  width: 200%;
  height: 25vh;
  position: absolute;
  top: 6%;
  left: -50%;
`;

interface Props {
  bgImg: string;
  bgColor: string,
  isSelected: boolean;
  catg: string;
  depth: string;

};

const CategoryChoices: FunctionComponent<Props> = ({ bgImg, bgColor, isSelected, catg, depth }) => {

  const catg_container = css`
    height: 75vh;
    width: 200vw;
    display: flex;
    justify-content: center;
    background-color: ${bgColor};
    border-radius: 100% 100% 0 0;
    transform: translateX(-25%);
    position: absolute;
    bottom: ${depth};
    left: 0;
    overflow-x: hidden;
    overflow-y: hidden;
`
  const playerRef = useRef(null);
  const lottieRef = useRef(null);

  const [following, setFollowing] = useState(isSelected);
  useEffect(() => {
    if (playerRef.current) {
      lottieRef.current = lottie.loadAnimation({
        container: playerRef.current,
        loop: true,
        autoplay: true,
        renderer: 'svg',
        animationData: endCTA,
      })
    }
  });


  return <div className={catg_container}>
    <div className={catg_container_item}>
      {
        following ? <img src={bgImg} alt="category image" className={bgImage} /> : <img src={bgImg} alt="category image" className={bgImageHidden}
      }
      <div className="catgs">
        <p>{catg}</p>
        {bgImg !== "" && <button type='button' onClick={() => (setFollowing(!following))}>{following ? 'Following' : <div> <span>{"+"}</span> Follow</div>}</button>}
      </div>
      {bgImg === "" ? <div ref={lottieRef} className={lotties}>
        <div ref={playerRef} className={lottiePlayer}></div>
      </div> : null}
    </div>
  </div>
};

export default CategoryChoices;