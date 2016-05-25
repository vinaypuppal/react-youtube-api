//import react
import React,{ Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//import stylesheet
import css from './styles/main.sass';

//import componenst
import Header from './components/header';
import Footer from './components/footer';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBie9yw838o6eOQawbj99e17FaJ5ksA5Y8';

//create root component
class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos:[],
			selectedVideo: null
		};
		this.fetchData('reactjs');
	}
	fetchData(term){
		YTSearch({key:API_KEY,term},(videos)=>{
			console.log(this);
			this.setState({videos,selectedVideo:videos[0]});
		});	
	}
	render() {
		const debouncedFetchData = _.debounce((term)=>{this.fetchData(term)},300);
		return (
			<div>
				<Header onSearchTermChange={debouncedFetchData}/>
				<div className="wrapper">
					<div className="container">
						<VideoDetail video={this.state.selectedVideo}/>
						<VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})} videos={this.state.videos}/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
} 


//render component
render(<App/>,document.getElementById('root'));

