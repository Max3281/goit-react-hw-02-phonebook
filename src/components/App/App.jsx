import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(9), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(9), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(9), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(9), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(con => con.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  formSubmit = ({ name, number }) => {
    let checkAlert = false;

    this.state.contacts.map(f => {
      if (f.name === name) {
        alert(`${name} is already in contacts`);
        return (checkAlert = true);
      }
      return f;
    });

    const newContact = {
      id: nanoid(9),
      name: name,
      number: number,
    };

    if (checkAlert === false) {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(fil => {
      return fil.name.toLocaleLowerCase().includes(normalizeFilter);
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter val={filter} onChange={this.changeFilter} />
        <ContactsList
          data={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
