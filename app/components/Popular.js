var React = require('react');
var PropTypes = require('prop-types');
var api = require('./../utils/api');
var Loading = require('./Loading');

function RepoGrid(props) {
	return (
		<ul className='popular-list'>
			{props.repos.map(function (repo, index) {
				return (
					<li key={repo.name} className='popular-item'>
						<div className='popular-rank'>#{index + 1}</div>
						<ul className='space-list-items'>
							<li>
								<img
									className='avatar'
									src={repo.owner.avatar_url}
									alt={'Avatar for ' + repo.owner.login}
								/>
							</li>
							<li><a href={repo.html_url}>{repo.name}</a></li>
							<li>@{repo.owner.login}</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
				)
			})}
		</ul>
	)
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired,
}

function SelectLanguage(props) { // Stateless functional component
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className='languages'>
			{languages.map(function (lang) {
				return (
					<li
						style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={props.onSelect.bind(null, lang)}
						key={lang}>
						{lang}
					</li>
				)
			})}
		</ul>
	)
}
// class SelectLanguage extends React.Component {
// 	render() {
// 		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

// 		return (
// 			<ul className='languages'>
// 				{languages.map(function (lang) {
// 					return (
// 						<li
// 							style={lang === this.props.selectedLanguage ? { color: '#d0021b' } : null}
// 							onClick={this.props.onSelect.bind(null, lang)}
// 							key={lang}>
// 							{lang}
// 						</li>
// 					)
// 				}, this)}
// 			</ul>
// 		)
// 	}
// }

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null,
		};
		// this = {};
		this.updateLangauge = this.updateLangauge.bind(this); // Here we are essnetially making sure that whenever we call this.updateLanguge that the this keyword will be bound to that context
		// We want this.updateLanguage to be a function that has the this keyword iside of it to be bound to whatever we pass in, and we are passing in 'this', therefore the this keyword to be bound to it in the correct context no matter what
		// No matter what context this.updateLanuage is called in, it will always have the correct this keyword
	}

	componentDidMount() {
		this.updateLangauge(this.state.selectedLanguage);
	}

	updateLangauge(lang) {
		this.setState(function () { // At this point we do not know what the 'this' keyword is going to be bound to
			return {
				selectedLanguage: lang,
				repos: null,
			}
		});
		api.fetchPopularRepos(lang)
			.then(function (repos) {
				this.setState(function () {
					return {
						repos: repos
					}
				});
			}.bind(this));
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLangauge} />
				{!this.state.repos
					? <Loading />
					: <RepoGrid repos={this.state.repos} />}
			</div>
		)
	}
}

module.exports = Popular;