import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  // cambiando de (props) a ({video}) dice que el props ya tiene un video
  // y que lo trate ya como una const dentro del componente
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imageUrl }/>
        </div>

        <div className="media-body">
          <div className="media-heading">{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
