/* eslint-disable prettier/prettier */

import { FunctionComponent, h } from "preact";

import { css } from "goober";
import { hideNativeUiElementsOfGlance } from "../scripts/glanceJsBridge";
import { useRef } from "preact/hooks";

interface Props {
    video_url: string;
}

const VerticalVideo = css`
    position: absolute;
    object-fit: fill;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0px;
`;

const VideoSource: FunctionComponent<Props> = ({ video_url }) => {
    const videoRef = useRef(null);

    function onBlur() {
        console.log("VIDEO_OUT_OF_FOCUS!!!");
        videoRef.current.pause();
    }
    function onFocus() {
        console.log("VIDEO_ON_FOCUS!!!");
        videoRef.current.play();
        setInterval(() => {
            hideNativeUiElementsOfGlance(['meatballsIcon', 'likeContainer']);
        }, 100);
    }

    const isGlanceSDK = typeof window.GlanceAndroidInterface !== 'undefined';
    if (isGlanceSDK) {
        window.onFocus = onFocus;
        window.outOfFocus = onBlur;
    } else {
        window.onfocus = onFocus;
        window.onblur = onBlur;
    }

    return <div>
        <video
            // width="320"
            // height="340"
            // loop
            playsInline
            autoPlay
            // muted
            // controls
            className={VerticalVideo}
            src={video_url}
            ref={videoRef}
        >
            Your browser does not support the video tag.
        </video>
    </div>
};

export default VideoSource;