import React from 'react';

class InputDOB extends React.Component {

	render() {

		return (

			<div className="form-group">
		      <label>{ this.props.label }</label>
		      <input type="date" className="form-control" id="exampleInputDOB1" placeholder={ this.props.label } />
		    </div>


		);
	}
};

InputDOB.propTypes = {

	label: React.PropTypes.string.isRequired
};

InputDOB.defaultProps = {

	label: 'Date of Birth'
};

export default InputDOB;