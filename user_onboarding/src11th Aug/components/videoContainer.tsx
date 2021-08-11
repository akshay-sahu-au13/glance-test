import { FunctionComponent, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { css } from "goober";
import { hideNativeUiElementsOfGlance } from "../scripts/glanceJsBridge";

interface Props {
    video_url: string;
    pause: boolean;
};

const VerticalVideo = css`
    position: absolute;
    object-fit: cover;
    height: 50%;
    width: 100%;
    top: 0;
    left: 0px;
`;

const VideoSource: FunctionComponent<Props> = ({ video_url, pause }) => {
    const videoRef = useRef(null);
    // console.log("Video ref: ", videoRef.current);
    // const onScreen = useOnScreen(videoRef);

    // const onFocus = () => {
    //     if (videoRef.current) {
    //         console.log("Video is on Focus!");
    //     } else {
    //         console.log("VIDEO OUT OF FOCUS!");
    //     }
    // }
    // ////////////////////////////////////////////////////////
    //     const windowHasFocus = function () {
    //         if (document.hasFocus()) {
    //             console.log("HasFocus called")
    //             return true
    //         }
    //         let hasFocus = false

    //         window.addEventListener('focus', function () {
    //             hasFocus = true
    //             console.log("Event Listener called")
    //         })
    //         window.focus()

    //         return hasFocus
    //     }
    // /////////////////////////////////////////////////////////

    function onBlur() {
        console.log("VIDEO_OUT_OF_FOCUS!!!");
        videoRef.current.pause();
    };
    function onFocus() {
        console.log("VIDEO_ON_FOCUS!!!");
        videoRef.current.play();
        hideNativeUiElementsOfGlance(['meatballsIcon', 'likeContainer']);   // to hide the native elements 
    };

    window.onfocus = onFocus;
    window.onblur = onBlur;

    // function useOnScreen(ref, rootMargin = "-100px") {
    //     const [isIntersecting, setIntersecting] = useState(false);
    //     useEffect(() => {
    //         const observer = new IntersectionObserver(
    //             ([entry]) => {
    //                 setIntersecting(entry.isIntersecting);
    //             },
    //             {
    //                 rootMargin
    //             }
    //         );
    //         if (ref.current) {
    //             observer.observe(ref.current);
    //         }
    //         const currentRef = ref.current;
    //         return () => {
    //             if (currentRef) {
    //                 observer.unobserve(currentRef);
    //             }
    //         };
    //     }, [ref, rootMargin]);
    //     return isIntersecting;
    // }

    // useEffect(
    //     () => {

    //         // if (windowHasFocus()) {
    //         //     console.log("Window is in FOCUS!!!")
    //         //     videoRef.current.play();
    //         // } else {
    //         //     console.log("Window is OUT OF FOCUS!!!")
    //         //     videoRef.current.pause();
    //         // }

    //         // window.onfocus();
    //     },
    //     []
    // );
    return <div>
        <video
            width="320"
            height="340"
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