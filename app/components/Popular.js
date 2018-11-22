var React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguge = this.updateLanguge.bind(this);
    }

    updateLanguge(lang) {
        this.setState(function () { // At this point we do not know what the 'this' keyword is going to be bound to
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <ul className='languages'>
                {languages.map(function (lang) {
                    return (
                        <li
                        style={lang === this.state.selectedLanguage ? { color: '#d0021b'}: null} 
                        onClick={this.updateLanguge.bind(null, lang)}
                        key={lang}>
                        {lang}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

module.exports = Popular;