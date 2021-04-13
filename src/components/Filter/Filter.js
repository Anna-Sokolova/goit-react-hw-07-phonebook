import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionsContact from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

const Filter = ({ valueFilter, onChangeFilter }) => (
  <>
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        value={valueFilter}
        onChange={onChangeFilter}
      />
    </label>
  </>
);

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  valueFilter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e =>
    dispatch(actionsContact.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
