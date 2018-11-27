var React = require('react');


function Button (props) {
	return(
		<button
		style={props.isToggleOn ? {color: 'blue'} : {color: 'red'}}
		onClick={props.handleToggle}>
		{props.isToggleOn ? 'ON' : 'OFF'}
	</button>
	)
}


class Toggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isToggleOn: true,
		}
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState(function () {
			return {
				isToggleOn: !this.state.isToggleOn
			}
		});
	};

	render() {
flu
		return (
			// <button
			// 	style={state.isToggleOn ? {color: 'blue'} : {color: 'red'}}
			// 	onClick={this.handleToggle}>
			// 	{this.state.isToggleOn ? 'ON' : 'OFF'}
			// </button>
			<Button
				isToggleOn={this.state.isToggleOn}
				handleToggle={this.handleToggle}
				/>
		)
	}
}

module.exports = Toggle;