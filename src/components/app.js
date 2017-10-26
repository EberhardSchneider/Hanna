"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

class App extends React.Component {
	render() {
		return (
				<RouteHandler>
					<h1 className="menu-item"> <Link to={'agenda'}> Agenda </Link> </h1>
					<h1 className="menu-item"> <Link to={'vita'}>Vita</Link> </h1>
					<Route path="agenda" component={Agenda}/>
					<Route path="vita" component={Vita}/}
				</RouteHandler>
			);
	}

	<Route path="agenda" component={Agenda}/>
	<Route path="vita" component={Vita}/}
} 

const Agenda = () => (
		<h1 className="Hello">Agenda Titel</h1>
	)


