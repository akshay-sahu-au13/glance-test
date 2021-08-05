import { FunctionComponent, h } from "preact";

import { css } from "goober";

interface Props {
    video_url: string;
    video_name: string;
};


const VerticalVideo = css`
    position: absolute;
    object-fit: cover;
    height: 50%;
    width: 100%;
    top: 0;
    left: 0px;
`


const VideoSource: FunctionComponent<Props> = ({ video_url, video_name }) => {

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
        >
            Your browser does not support the video tag.
        </video>
    </div>
};

export default VideoSource;