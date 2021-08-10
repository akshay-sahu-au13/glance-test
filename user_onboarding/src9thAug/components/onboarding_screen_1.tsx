import { css } from 'goober';
import { FunctionComponent, h } from 'preact';
import colors from '../styles/colors';
import font from '../styles/font';
import img1 from '../assets/img1.jpg';
import Glance_block from './glance_block';

const Container = css`
  background: ${colors.black};
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
  height: 100%;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${font.fontLarge};
`;

const overlayTop = css`
    position: absolute;
    top:0;
    left:0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    opacity: 0.4;
    z-index: 3;
    height: 240px;
    width:100%;
`;

const overlayBottom = css`
    position: absolute;
    bottom:0;
    left:0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    opacity: 0.4;
    z-index: 3;
    height: 240px;
    width:100%;
`;
const App: FunctionComponent = () => {
  return <div className={Container}>
    <div className={overlayTop}>

    </div>
    <Glance_block />

    <div className={overlayBottom}>

    </div>

  </div>;
};

export default App;
