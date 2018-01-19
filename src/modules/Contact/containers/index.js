import React, {Component} from 'react'
import Form from './../components/Form'
import {reset} from 'redux-form'
import {connect} from 'react-redux'
import {contactSent} from '../../../store/actions/contactActions'
import {
  Redirect
} from 'react-router-dom'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
  }
  
  handleSubmit = (values, dispatch) => {
    dispatch(contactSent(values))
    dispatch(reset('contactForm'))
    
    this.setState({
      redirectToReferrer: true
    })
  }

  render() {
    const {data} = this.props.contact

    if (this.state.redirectToReferrer) {
      return (
        <Redirect to='/home' />
      )
    }

    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="row text-center">
            <h2>Contact</h2>
          </div>
          <Form onSubmit={this.handleSubmit} />
          <div>Form data: {data ? JSON.stringify(data) : null}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      contact: state.contact
  }
}

export default connect(mapStateToProps)(Contact)
