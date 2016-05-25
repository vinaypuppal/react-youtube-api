//import react
import React,{ Component } from 'react';
import { render } from 'react-dom';

//import stylesheet
import css from './styles/main.sass';

//create component
class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum possimus similique, voluptas pariatur perspiciatis eveniet! Nemo at iusto alias tenetur sint laudantium, ullam est accusamus illo illum id commodi deserunt!</p>
			</div>
		);
	}
}


//render component
render(<App/>,document.getElementById('root'));

