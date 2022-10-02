import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Section, Titleh1, Titleh2 } from './App.styled';
import { useState,useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
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

    const addContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

    // Вертає результат фільтра
    const getContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
    };

    const visibleContacts = getContacts();

    // Видаляємо контакт з списку
 const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };
  
    return (
      <Container>
        <Section title="Phonebook">
          <Titleh1>Phonebook</Titleh1>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Titleh2>Contacts</Titleh2>
          <Filter value={filter} onChange={handleFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Container>
    );
  }

