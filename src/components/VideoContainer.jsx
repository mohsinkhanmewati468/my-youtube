import { Link } from "react-router-dom";
import { apiData } from "../utils/apiData";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = apiData?.video_results || [];
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.video_id}`} key={video.video_id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
