import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	//any time we create new instance of this componenet it will call the constructor first
	constructor(props) {
		// we do not do data loading in the constructor
		super(props); //because its extends from React.Component its his parent so to make sure the consturctor of the React component called we use Super to call the costructor of the father
		//this is the only time we do direct assigment to this.state
		this.state = { lat: null, errorMessage: '' }; // we dont know the number yet
	}
	//the constructor equal to  beacuse of babel that translate it to same like on the constructor
	//state = { lat: null, errorMessage: '' };
	componentDidMount() {
		//this only happen one time when to component show on screen
		// here is good place to do data loading
		//callback function - a function that will be called some when in the future when getting the latitude
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				//when you set state the component will render it self setState edit the state of the componenet
				this.setState({ lat: position.coords.latitude });
				// we never direct assigent the state
			}, // err object have message atribute inside of her
			(err) => this.setState({ errorMessage: err.message })
		);
	}
	componentWillUpdate() {
		// happen after set state
		console.log('Updated');
	}
	renderContent() {
		// a helper methos we dont do many return on render()
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message="Accept locatin request" />; // only have 1 return so if not both the last one will appere
		// when you go from multiline to single line remmber to not put ; in the end of line and use ()
	}
	//React says you have to definee render, render function called frequntly for the component
	render() {
		// function that we return jsx in it
		//An element describes what you want to see on the screen:
		return <div className="border color">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
