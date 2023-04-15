import React, { Component } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name: name, number: number });
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="number">Tel.Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Tel. number"
          value={number}
          onChange={this.handleChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
