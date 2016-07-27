import $ from 'jquery';
import Bootstrap from 'bootstrap';
import React from 'react';
import SignUpForm from './SignUpForm';

class App extends React.Component {
	render() {
		return (

			<div>
				<SignUpForm />
			</div>

		)
	}
}

React.render(<App />, document.getElementById('app'));