import React, { Component } from 'react';
import { submitKryptos,setInitial } from '../../actions/kruptos';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SubmitOwn extends Component {
  state = {
    for_person: 'Anonymous',
    message: ''
  };

  static propTypes = {
    submitKryptos: PropTypes.func.isRequired,
    submitted: PropTypes.string,
    setInitial : PropTypes.func.isRequired
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.submitKryptos(this.state.for_person, this.state.message);
    this.setState({
      for_person: 'Anonymous',
      message: ''
    })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { for_person, message } = this.state;
    if(this.props.submitted === 'DONE'){
      return (
        <div className="container">
          <div className="center-block">
            <h2>Submitted Successfully</h2><br/>
            <a href="/">Back to Home</a>
          </div>
          <div className="bottom-center" onClick={this.props.setInitial}>
            <Link to="/submit" className="nav-link">Submit Another Krupto</Link>
          </div>
        </div>
      );
    } else if(this.props.submitted === 'FAILED'){
      return (
        <div className="container">
          <div className="center-block">
            <h2>Error Occurred</h2><br/>
            <a href="/">Back to Home</a>
          </div>
          <div className="bottom-center" onClick={this.props.setInitial}>
            <Link to="/submit" className="nav-link">Try Again</Link>
          </div>
        </div>
      );
    }
      return (
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Enter your Message / Secret / Confession</h2><br/>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <textarea 
                type="text"
                className="form-control"
                name="message"
                rows="6"
                onChange={this.onChange}
                value={message}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  submitted: state.submitKryptos.submitted
});


export default connect(mapStateToProps, { submitKryptos, setInitial })(SubmitOwn);
