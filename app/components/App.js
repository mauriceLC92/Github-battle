var React = require('react');
var Popular = require('./Popular');
// var FriendList = require('./FriendList');
var Toogle = require('./Toggle');

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Popular />
			</div>
		)
	}
}

module.exports = App;