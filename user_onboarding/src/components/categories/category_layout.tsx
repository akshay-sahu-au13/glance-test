import { FunctionComponent, h } from 'preact';
import { css, keyframes } from 'goober';

import VideoSource from '../videoContainer';
import colors from '../../styles/colors';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

const progressBar = keyframes`
    0% {
    /* transform: translateX(-100%); */
    background: linear-gradient(to right, #FE3460 50%, #1A1A1A 50%);
    background-size: 200% 100%;
    background-position: bottom right;
  
  }
   50% {
    background-position: bottom left;

  }
  100% {
    background-position: bottom left;
  }
`;

const categoryContainer = css`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`
const actionBar = css`
  color: white;
  height: 115px;
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
  background-color: rgb(26, 26, 26);
  border-radius: 100% 100% 0 0;
  transform: translateX(-8%);
  z-index:3;
  /* backdrop-filter: blur(10px); */

  `
const overlayActionBar = css`
  color: white;
  height: 118px;
  width: 120%;
  position: absolute;
  bottom:0%;
  left:0;
  border-radius: 100% 100% 0 0;
  transform: translateX(-8%);
  animation: ${progressBar} 10s linear;
  /* z-index:5; */
  `


const actionButtons = css`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  font-size: 13px;
  font-weight: 300;
  & .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 39vw;
    max-width:160px;
    border-radius: 20px;
    & p { 
      padding: 4px 0 0 5px;
      @media (max-width: 280px){
        font-size: 90%;
        padding: 1px 0 0 5px;
      }
    }
    & span {
      font-size: 160%;
    }
    &.left {
    background-color: ${colors.darkGrey};
    & span {
      transform: rotate(45deg);
    }
  };
    &.right {
      background-color: ${colors.lightPink};
    };
  };
  
`

const categoryIcons = css`
    position: absolute;
    bottom: 105px;
    left: 50%;
    /* height: 6%; */
    transform: translateX(-50%);
    z-index:4;
  `

interface CategoryLayoutProps {
  bgImg: string;
  categoryIcon: string;
  nextPage: string;
}

const CategoryLayout: FunctionComponent<CategoryLayoutProps> = ({ bgImg, categoryIcon, nextPage }) => {

  useEffect(() => {
    setTimeout(() => {
      route(`${nextPage}`)
    }, 5000);
  }, [])

  const bg_video = css`
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-position:center;
  background-size: cover;
`

  return <div className={categoryContainer}>
    <div className={categoryIcons}>
      <img src={categoryIcon} alt="category icon" />
    </div>
    <div className={bg_video}>
      {/* < VideoSource video_url={video_url} video_name={video_name}/> */}
      <div className={overlayActionBar}>

      </div>
      <div className={actionBar}>
        <div className={actionButtons}>
          <div className="btn left"> <span>+</span> <p>Not interested</p></div>
          <div className="btn right"> <span>+</span> <p>Follow</p></div>
        </div>
      </div>

    </div>
  </div>
}

export default CategoryLayout;