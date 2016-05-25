import React from 'react';

const VideoListItem = ({video,onVideoSelect})=>{
	var imgUrl = video.snippet.thumbnails.default.url;
	return (
		<li className="video-list-item">
		  <a href="#" onClick={(e)=>{onVideoSelect(video)}} >
		    <div className="preview-img">
		    	<img src={imgUrl} alt="preview-img"/>
		    </div>
		    <div className="title">
		      <h1>{video.snippet.title}</h1>
		    </div>
		  </a>
		</li>
	);
};

export default VideoListItem;