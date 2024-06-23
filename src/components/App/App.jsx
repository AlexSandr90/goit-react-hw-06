import './App.css';
import { ContactForm, ContactList, SearchBox } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contactsSlice';
import { changeFilter, selectedNameFilter } from '../../redux/filtersSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector(selectedNameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (newFilterValue) => {
    dispatch(changeFilter(newFilterValue));
  };

  const searchContacts = contacts.filter(({ name }) =>
    name?.toLowerCase().includes(filterValue?.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox value={filterValue} onFilter={handleFilterChange} />
      <ContactList
        contacts={searchContacts}
        deletedContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
