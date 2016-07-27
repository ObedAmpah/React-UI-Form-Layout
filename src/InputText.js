import React from 'react';

class InputText extends React.Component {

	render() {

		return (

			<div className="form-group">
				<label htmlFor="5"> { this.props.label } </label>
				<input id="5" type="text"/>
			</div>

		);
	};

};

InputText.propTypes = {

	label: React.PropTypes.string.isRequired
};

InputText.defaultProps = {

	label: ''
};

export default InputText;