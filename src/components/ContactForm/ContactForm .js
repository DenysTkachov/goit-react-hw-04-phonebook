import React, { useState } from 'react';

export const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleAddContact = () => {
    const { name, number } = contact;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    onAddContact(contact);
    setContact({ name: '', number: '' });
  };

  return (
    <div>
      <h2>Name</h2>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleInputChange}
        required
      />
      <h2>Number</h2>
      <input
        type="tel"
        name="number"
        value={contact.number}
        onChange={handleInputChange}
        required
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};




