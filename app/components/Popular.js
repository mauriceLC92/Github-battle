var React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        // this = {};
        this.updateLanguge = this.updateLanguge.bind(this); // Here we are essnetially making sure that whenever we call this.updateLanguge that the this keyword will be bound to that context
        // We want this.updateLanguage to be a function that has the this keyword iside of it to be bound to whatever we pass in, and we are passing in 'this', therefore the this keyword to be bound to it in the correct context no matter what
        // No matter what context this.updateLanuage is called in, it will always have the correct this keyword
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