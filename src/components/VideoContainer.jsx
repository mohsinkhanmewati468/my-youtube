import { apiData } from "../utils/apiData";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = apiData?.video_results || [];
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard info={video} key={video.video_id} />
      ))}
    </div>
  );
};

export default VideoContainer;
