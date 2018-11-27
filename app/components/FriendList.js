var React = require('react');

function Friend (props) {
	var friends = ['Vic', 'Lolo', 'Mzamo', 'Darch'];
		return (
			<ul>
			{friends.map(function (friend) {
				return (
					<li key={friend}
						style={friend === props.currentFriend ? { color: 'blue' } : null}
						onClick={props.updateCurrentFriend.bind(null, friend)}
					>
						{friend}
					</li>

				)
			})}
		</ul>
		)
}
// class Friend extends React.Component {
// 	render() {
// 		var friends = ['Vic', 'Lolo', 'Mzamo', 'Darch'];
// 		return (
// 			<ul>
// 				{friends.map(function (friend) {
// 					return (
// 						<li key={friend}
// 							style={friend === this.props.currentFriend ? { color: 'blue' } : null}
// 							onClick={this.props.updateCurrentFriend.bind(null, friend)}
// 						>
// 							{friend}
// 						</li>

// 					)
// 				}, this)}
// 			</ul>
// 		)
// 	}
// }

class FriendList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentFriend: 'Vic'
		};

		this.updateCurrentFriend = this.updateCurrentFriend.bind(this);
	}

	updateCurrentFriend(friend) {
		this.setState(function () {
			return {
				currentFriend: friend
			}
		});
	}

	render() {

		return (
			<div className='friendlist'>
				<Friend
				currentFriend={this.state.currentFriend}
				updateCurrentFriend={this.updateCurrentFriend}
				/>
			</div>
		)
	}
}

module.exports = FriendList;