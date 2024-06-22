import './App.css';
import { ContactForm, ContactList, SearchBox } from '../index';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [filterValue, setFilterValue] = useState('');

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const searchContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox value={filterValue} onFilter={setFilterValue} />
      <ContactList
        contacts={searchContacts}
        deletedContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
