import $ from 'jquery';
import React from 'react'
import ReactDOM from 'react-dom'
import { MainMenu } from './components/MainMenu'

class App extends React.Component {
	render() {
		return (
			<p>App</p>
			);
	} 
};

ReactDOM.render(
	<MainMenu/>,
	document.getElementById('app')
	);

