import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import classes from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { selectedContacts } from '../../redux/contactsSlice';
import { selectedNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectedContacts);
  const filterValue = useSelector(selectedNameFilter);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const searchContacts = contacts.filter(({ name }) =>
    name?.toLowerCase().includes(filterValue?.toLowerCase())
  );
  return (
    <ul className={classes.contactList}>
      {searchContacts?.map((contact) => {
        return (
          <li className={classes.contact} key={contact.id}>
            <Contact deletedContact={handleDeleteContact} {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
