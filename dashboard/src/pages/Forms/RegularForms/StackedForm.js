import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }
  return errors;
};

const StackedForm = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
  <div className="card">
    <div className="header">
      <h4>Regular Form</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Name</label>
          <Field
            name="name"
            type="text"
            component={renderField} />
        </div>

        {/* <div className="form-group">
          <label className="control-label">Password</label>
          <Field
            name="password"
            type="password"
            component={renderField} />
        </div> */}

        {/* <Field
          name="newsletter"
          type="checkbox"
          component={renderField}
          label="Subscribe to newsletter" /> */}
        <div className="form-group">
          <label className="control-label">Age</label>
          <Field
            name="age"
            type="number"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Gender</label>
          <Field
            name="gender"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Company ID</label>
          <Field
            name="companyid"
            type="text"
            component={renderField} />
        </div>



        <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Submit</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'stackedForm',
  validate
})(StackedForm)