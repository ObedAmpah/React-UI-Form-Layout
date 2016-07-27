import React from 'react';

class InputPW extends React.Component {

	render() {

		return (

			<div className="form-group">
				<label htmlFor="exampleInputPassword1"> { this.props.label } </label>
			    <input type="password" className="form-control" id="exampleInputPassword1" placeholder={ this.props.label } />
		    </div>


		);
	}
};

InputPW.propTypes = {

	label: React.PropTypes.string.isRequired
};

InputPW.defaultProps = {

	label: 'Password'
};

export default InputPW;