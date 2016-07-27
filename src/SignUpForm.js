import React from 'react';
import InputText from './InputText';
import InputEmail from './InputEmail';
import InputDOB from './InputDOB';
import InputPW from './InputPW';

class SignUpForm extends React.Component {

	render() {

		return (

			<div className="container main_container">
				
				<div className="row">
					
					<div className="col-md-8 col-md-offset-2 form_p">

						<h1 className="form_title">{ this.props.title }</h1>
								
						<form>
														
							<InputText label="First Name"/>
							<InputText label="Last Name"/>
							<InputEmail />
							<InputDOB />
							<InputPW />

							<button type="submit" className="btn btn-primary">{ this.props.submit }</button>

						</form>

					</div>

				</div>

			</div>

		);
	}
};

SignUpForm.propTypes = {

	title: React.PropTypes.string.isRequired,
	submit: React.PropTypes.string.isRequired
};

SignUpForm.defaultProps = {

	title: 'Sign Up, Today!',
	submit: 'Submit'
};

export default SignUpForm;