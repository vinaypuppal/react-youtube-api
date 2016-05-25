import React from 'react';

const VideoDetail = ({video})=>{
	if(video){
	return (
		<div className="video-details">
		    <div className="player">
		    	<iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
		    </div>
		    <div className="info">
		      <h1>{video.snippet.title}</h1>
		      <p>{video.snippet.description}</p>
		    </div>
		</div>
	);
	}else{
		return(
			<div className="video-details">
				<h1>Loading.......</h1>
			</div>	
		);
		
	}
};

export default VideoDetail;