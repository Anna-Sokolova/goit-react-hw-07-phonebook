import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionsContact from '../../redux/contacts/contacts-actions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static defaultProps = {
    name: '',
    number: '',
    state: [],
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    state: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      alert('Please enter valid information!');
      this.reset();
      return;
    }
    // console.log(this.props.contacts.items);

    const findName = this.props.contacts.items.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase(),
    );

    if (findName) {
      alert(`${this.state.name} is already in contacts!`);
      this.reset();
      return;
    }
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel}>
            Number
            <input
              className={styles.formInput}
              type="tel"
              name="number"
              placeholder="Enter phone"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(actionsContact.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
