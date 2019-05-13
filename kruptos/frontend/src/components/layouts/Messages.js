import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getKruptos } from '../../actions/kruptos';

export class Messages extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 1,
      end : false
    }
  }

  static propTypes = {
    kruptos: PropTypes.object.isRequired,
    getKruptos: PropTypes.func.isRequired
  }

  componentDidMount() {
    document.addEventListener("click", this.getNext)
    this.props.getKruptos(this.state.count);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.getNext)
  }

  getNext = e => {
    this.setState({count: this.state.count+1})
    if(this.props.kruptos.next === null){
      this.state.end = true
    } else {
      this.props.getKruptos(this.state.count);
    }
  }

  render() {
    const { results } = this.props.kruptos;

    if( this.state.end === false) {
      return (
        <div className="container">
          <div className="center-block">
          {
            results.map(msg => 
            <h2 key={msg.id}><center>{msg.message}</center></h2>) }
          </div>
          <div className="bottom-center">
          <Link to="/submit" className="nav-link">Submit your Krypto</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="center-block">
            <h2>Sorry, Looks like you're out of all Kryptos</h2><br/>
            <a href="/">Back to Start</a>
          </div>
          <div className="bottom-center">
            <Link to="/submit" className="nav-link">Submit your Krypto</Link>
          </div>
        </div>
      );
    }
    
  }
}

const mapStateToProps = state => ({
  kruptos: state.kruptos.kruptos
})

export default connect(mapStateToProps, { getKruptos } )(Messages);
