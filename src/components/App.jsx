import { Section } from './common';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { usePhonebook } from 'hooks/usePhonebook';

export const App = () => {
  const { contacts, filterValue, filteredContacts, add, filter, remove } =
    usePhonebook();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={add} />
      </Section>
      {contacts?.length > 0 && (
        <Section title="Contacts">
          <Filter filterContact={filter} value={filterValue} />
          <ContactList contacts={filteredContacts} deleteContact={remove} />
        </Section>
      )}
    </>
  );
};
