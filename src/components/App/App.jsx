import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Section, Titleh1, Titleh2 } from './App.styled';
import { useEffect } from 'react';

export function App()  {
  const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  
  const [filter, setFilter] = useState('');


// Перевіряємо localStorage чи є контакти
  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsStorage);
    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);
    
// Додає контакт в localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    // Додає контакт в список
  addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  // Вертає результат фільтра
  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Видаляємо контакт з списку
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <Titleh1>Phonebook</Titleh1>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Titleh2>Contacts</Titleh2>
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
