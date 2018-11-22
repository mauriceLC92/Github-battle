var React = require('react');
var ReactDom = require('react-dom');
var propTypes = require('prop-types');
require('./index.css');

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello world</h1>
			</div>
		)
	}
}



ReactDom.render(
	<App />,
	document.getElementById('app')
)