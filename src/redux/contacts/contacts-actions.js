import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contacts/Add', function prepare(data) {
  return {
    payload: {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    },
  };
});
export const deleteContact = createAction('contacts/Delete');
export const changeFilter = createAction('contacts/changeFilter');
