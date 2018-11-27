var React = require('react');
var Popular = require('./Popular');
var FriendList = require('./FriendList');
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