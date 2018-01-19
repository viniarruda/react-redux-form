import React from 'react'
import {Field, reduxForm} from 'redux-form'

const validate = values => {
  const errors = {}
  if(!values.name) {
    errors.name = 'Required'
  }
  if(!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  return errors
}

const renderField = ({
  input,
  label,
  type,
  classname,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={classname} />
      {touched &&
        (error && <span>{error}</span>)
      }
    </div>
  </div>
)

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group">
        <Field
          name="name"
          component={renderField}
          type="text"
          label="Name"
          classname="form-control"
        />
      </div>
      <div className="form-group">
        <Field
          name="email"
          component={renderField}
          type="email"
          label="E-mail"
          classname="form-control"
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <Field name="message" component="textarea" className="form-control" />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Send
        </button>{' '}
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contactForm',
  validate
})(Form)
