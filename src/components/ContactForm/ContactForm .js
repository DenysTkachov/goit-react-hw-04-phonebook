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




// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameChange = e => {
//     this.setState({ name: e.target.value });
//   };

//   handleNumberChange = e => {
//     this.setState({ number: e.target.value });
//   };

//   handleAddContact = () => {
//     const { name, number } = this.state;

//     if (name.trim() === '' || number.trim() === '') {
//       return;
//     }

//     const newContact = {
//       name,
//       number,
//     };

//     this.props.onAddContact(newContact);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Name</h2>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//           required
//         />
//         <h2>Number</h2>
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleNumberChange}
//           required
//         />
//         <button onClick={this.handleAddContact}>Add Contact</button>
//       </div>
//     );
//   }
// }
