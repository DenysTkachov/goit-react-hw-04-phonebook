import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList '; 
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';


export const App = () => {


  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      localStorage.removeItem('contacts');
    }
    
  }, [contacts]);

  const handleAddContact = newContact => {
    const { name, number } = newContact;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const id = nanoid();
    setContacts(prevContacts => [...prevContacts, { id, name, number }]);
  };


   const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};





