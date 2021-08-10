import { FunctionComponent, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { css } from "goober";

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
    console.log("Video ref: ", videoRef.current);
    const onScreen = useOnScreen(videoRef);

    function useOnScreen(ref, rootMargin = "-100px") {
        const [isIntersecting, setIntersecting] = useState(false);
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                {
                    rootMargin
                }
            );
            if (ref.current) {
                observer.observe(ref.current);
            }
            const currentRef = ref.current;
            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        }, [ref, rootMargin]);
        return isIntersecting;
    }

    useEffect(

        () => {
            if (onScreen) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        },
        [onScreen]
    );
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