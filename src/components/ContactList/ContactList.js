import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionsContact from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts &&
      contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}
            <span className={styles.divider}>:</span>
            <span className={styles.tel}>{number}</span>
          </p>
          <button
            type="button"
            className={styles.btnDelete}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredByName = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const filteredContactByName = getFilteredByName(items, filter);

  return {
    contacts: filteredContactByName,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actionsContact.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
