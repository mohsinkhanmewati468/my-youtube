const VideoCard = ({ info }) => {
  const {
    title,
    // description,
    thumbnail,
    views,
    // video_id,
    // published_date,
    // length,
    channel,
  } = info;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnail.rich} alt="video-thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channel.name}</li>
        <li>{views} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
