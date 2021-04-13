import React from 'react';
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="container">
      <Title title="Phonebook" />
      <ContactForm />
      <Filter />
      <Title title="Contacts" />
      <ContactList />
    </div>
  );
};

export default App;
