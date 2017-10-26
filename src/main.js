import $ from 'jquery';
import React from 'react'
import TweenMax from 'gsap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div> 
					<Link to="/"><h1 className="menu-item">Home</h1></Link>
					<Link to="agenda"><h1 className="menu-item">Agenda</h1></Link>
					<Link to="vita"><h1 className="menu-item">Vita</h1></Link>
					<div id="content"></div>
				
				<hr/>
				
				<Route exact path="/" component={Home}/>
				<Route path="/agenda" 
							 component={Agenda}/>
				<Route path="/vita" component={Vita}/>
			
				</div>
			</Router>
			);
	}
};


class Agenda extends React.Component {
	
	componentDidMount(prevProps) {
		$('.menu-item').each(function(index) {
			TweenMax.to( $(this), 2, { left: index * 30 + 50, autoRound: false, fontSize: '12' });
		});

	}
	render() {
		return (
			<div>
				<h1>Agenda</h1>
				<p>Dies ist die Agenda!</p>
				
			</div>
			);
	}
}

class Home extends React.Component {
	componentDidMount(prevProps) {
		$('.menu-item').each( function(index) {
			TweenMax.to( $(this), 2, { left: '200', fontSize: '32', autoRound: false});
		});
	}

	render() {
		return <h1>Home</h1>;
	}
}

const Vita = () =>(
	<div>
		<h1>Vita</h1>
		
		<p>Das Leben der Hanna ...</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere possimus, minus voluptatum quam praesentium nemo tempore. Reiciendis cumque placeat quo laborum, minus odit totam minima corporis nulla quia reprehenderit.</p>
	</div>
	)

ReactDOM.render(
	<App/>,
	document.getElementById('app')
); 