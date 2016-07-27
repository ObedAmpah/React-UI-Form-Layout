import React from 'react';

class InputEmail extends React.Component {

	render() {

		return (

			<div className="form-group">
				<label htmlFor="5">{ this.props.label }</label>
				<input id="5" type="email"/>
				<small className="text-muted">{ this.props.kicker }</small>
			</div>

		);
	};

};

InputEmail.propTypes = {

	label: React.PropTypes.string.isRequired,
	kicker: React.PropTypes.string.isRequired
};

InputEmail.defaultProps = {

	label: 'Email',
	kicker: 'We never share your email with anyone else.'
};

export default InputEmail;