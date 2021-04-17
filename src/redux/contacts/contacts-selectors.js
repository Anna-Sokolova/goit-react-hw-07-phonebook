const getLoading = state => state.contacts.loading;

const getAllContacts = state => state.contacts.items;

const getValueFilter = state => state.contacts.filter;

const getFilteredByName = state => {
  const allContacts = getAllContacts(state);
  const filter = getValueFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

export default {
  getLoading,
  getAllContacts,
  getValueFilter,
  getFilteredByName,
};
