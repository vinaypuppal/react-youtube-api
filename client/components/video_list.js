import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = ({videos,onVideoSelect})=>{
	if(videos){
			return (
				<ul className="video-list">
				   {videos.map((video)=>{
				   	return <VideoListItem onVideoSelect={onVideoSelect} video={video} key={video.etag}/>
				   })}
		  		</ul>
			)	
	}else{
		return(
			<ul className="video-list">
			<li className="video-list-item">
				<div className="title">Loading.....</div>
			</li>
			</ul>
		);
	}
	
}

export default VideoList