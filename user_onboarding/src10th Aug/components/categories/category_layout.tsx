import { FunctionComponent, h } from 'preact';
import { css, keyframes } from 'goober';
import { getAllCategories, getCategorySubscriptions, isCategorySubscribed, sendCustomAnalytics, updateCategorySubscriptions } from '../../scripts/glanceJsBridge';
import { useEffect, useState } from 'preact/hooks';

import VideoSource from '../videoContainer';
import colors from '../../styles/colors';
import { route } from 'preact-router';

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
`;

const actionBar = css`
  color: white;
  height: 125px;
  width: 120%;
  position: absolute;
  bottom:20px;
  left:0;
  box-shadow: 0 20px 0 0 rgb(26, 26, 26);
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
  `;

const overlayActionBar = css`
  color: white;
  height: 128px;
  width: 120%;
  position: absolute;
  bottom:20px;
  left:0;
  border-radius: 100% 100% 0 0;
  transform: translateX(-8%);
  animation: ${progressBar} 10s linear;
  /* z-index:5; */
  `;


const actionButtons = css`
  display: flex;
  width: 100vw;
  height: 90%;
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
    transition: 0.3s;
    &:active {
      transform: scale(1.05);
    }

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
  
`;

const categoryIcons = css`
    position: absolute;
    bottom: 135px;
    left: 50%;
    transform: translateX(-50%);
    z-index:4;
  `;

interface CategoryLayoutProps {
  bgImg: string;
  categoryIcon: string;
  nextPage: string;
  category: string;
  setCurrentScreen: Function;
};

const CategoryLayout: FunctionComponent<CategoryLayoutProps> = ({ bgImg, categoryIcon, nextPage, category, setCurrentScreen }) => {

  const eventType: string = 'category_webpeek';
  const actions: {
    sub: string;
    notInterested: string;
    time_spent: string;
    no_action_from_user: string;
  } = {
    sub: 'category_subscribed',
    notInterested: 'not interested',
    time_spent: `time_spent_on_${category}_webpeek`,
    no_action_from_user: `no_action_from_user`
  };

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    let timer = setTimeout(() => {
      // route(`${nextPage}`);
      setCurrentScreen(`${nextPage}`);
      const extras = { action: actions.time_spent, total_time: '5000 ms' };
      const extras1 = { action: actions.no_action_from_user, category: `user didn't take any action on ${category}` };
      sendCustomAnalytics({ eventType, extras });                    // Ananlytics - time spent on wwebpeek
      sendCustomAnalytics({ eventType, extras: extras1 });            // Ananlytics - user auto moved to nextpage
    }, 5000);

    return () => {
      clearTimeout(timer);
    }
  }, []);


  const categoriesSubscriptionStatus = JSON.parse(getCategorySubscriptions());
  // "{\"#daily_digest\":true,\"#entertainment\":false, \"#travel\":true}"    <---- Sample Data
  const follow = () => {
    console.log("Category Subscribed: ", category);
    categoriesSubscriptionStatus[category] = true;
    console.log("Updated List: ", categoriesSubscriptionStatus);
    updateCategorySubscriptions(JSON.stringify(categoriesSubscriptionStatus));  // updating subscription status
    const extras: { action: string, category: string } = { action: actions.sub, category: category };
    sendCustomAnalytics({ eventType, extras });
    const extras1 = { action: `time_spent_on_${category}_webpeek`, total_time: `${Date.now() - time} ms` };
    sendCustomAnalytics({ eventType, extras: extras1 });

    // route(`${nextPage}`);
    setCurrentScreen(`${nextPage}`);
  }

  const notInterested = () => {
    console.log("Not Interested in: ", category);
    categoriesSubscriptionStatus[category] = false;
    console.log("Updated List ", categoriesSubscriptionStatus);
    updateCategorySubscriptions(JSON.stringify(categoriesSubscriptionStatus)); // updating subscription status
    const extras: { action: string, category_not_interested: string } = { action: actions.notInterested, category_not_interested: category }
    sendCustomAnalytics({ eventType, extras });                      // Analytics - not interested, time_spent
    const extras1 = { action: `time_spent_on_${category}_webpeek`, total_time: `${Date.now() - time} ms` }
    sendCustomAnalytics({ eventType, extras: extras1 });

    // route(`${nextPage}`);
    setCurrentScreen(`${nextPage}`);
  };

  const bg_video = css`
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-position:center;
  background-size: cover;
`;

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
          <div className="btn left" onClick={notInterested} > <span>+</span> <p>Not interested</p></div>
          <div className="btn right" onClick={follow} > <span>+</span> <p>Follow</p></div>
        </div>
      </div>

    </div>
  </div>
}

export default CategoryLayout;