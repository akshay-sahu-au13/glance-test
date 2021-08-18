import { FunctionComponent, h } from 'preact';

import colors from '../styles/colors';
import { css } from 'goober';
import rightArrow from '../assets/arrow.webp';
import { useEffect } from 'preact/hooks';

interface NextBtnProps {
    clickedOnNext: Function;
    lang: string;
    setLang: Function;
}

const NextButton: FunctionComponent<NextBtnProps> = ({
    clickedOnNext,
    lang,
    setLang,
}) => {
    const NextBtn = css`
    padding: 5px 16px;
    width: max-content;
    height: 30px;
    font-size: 16px;
    background-color: #d42257;
    color: ${colors.white};
    text-decoration: none;
    border-radius: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), inset 0px -1px 2px #d1406b,
      inset 0px 1px 2px #d1406b;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease;

    & span {
      text-transform: capitalize;
    }
  `;

    const NextBtnBlack = css`
    padding: 5px 16px;
    width: max-content;
    height: 30px;
    font-size: 16px;
    background-color: ${colors.black};
    color: ${colors.white};
    text-decoration: none;
    border-radius: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3),
      inset 0px -1px 2px rgba(0, 0, 0, 0.3),
      inset 0px 1px 2px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease;

    & span {
      text-transform: capitalize;
    }
  `;

    useEffect(() => {
        if (lang !== '') {
            setTimeout(() => {
                setLang('');
            }, 1000);
        }
    }, [lang]);

    // return (
    //     <div onClick={clickedOnNext} className={NextBtn}>
    //         {lang ? (
    //             <div className="successMsg">
    //                 👏 You are subscribed to <span>{lang}</span>
    //             </div>
    //         ) : (
    //             <div>
    //                 {' '}
    //                 Next <img src={rightArrow} alt="right arrow" height="14" />{' '}
    //             </div>
    //         )}
    //     </div>
    // );

    return (
        <div>
            {lang ? (
                <div className={NextBtnBlack}>
                    <div>
                        👏 You are subscribed to <span>{lang}</span>
                    </div>
                </div>
            ) : (
                <div onClick={clickedOnNext} className={NextBtn}>
                    <div>
                        Next <img src={rightArrow} alt="right arrow" height="14" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NextButton;
