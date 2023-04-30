import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectorContacts } from './../redux/selectors';

export const App = () => {
  const contacts = useSelector(selectorContacts);

  return (
    <div className="container">
      <h1 className="h1">Phonebook</h1>
      <ContactForm />

      <h2 className="h2">Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Your contacts is don`t list</p>
      )}
    </div>
  );
};
