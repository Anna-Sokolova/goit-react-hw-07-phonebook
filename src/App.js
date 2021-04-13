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

      <div className="container">
        <div>
          <Title title="Contacts" />
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
