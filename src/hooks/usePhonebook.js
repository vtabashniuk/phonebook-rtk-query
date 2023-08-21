import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, filterContact } from 'redux/phonebookSlice';
import { duplicationCheck } from 'utils/duplicationCheck';

export const usePhonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filterValue = useSelector(state => state.phonebook.filter);
  const filteredContacts = contacts.filter(item =>
    item.name.includes(filterValue)
  );

  const handleAdd = value => {
    if (!duplicationCheck(value, contacts)) {
      dispatch(addContact(value));
    }
  };
  const handleDelete = value => dispatch(deleteContact(value));
  const handleFilter = value => dispatch(filterContact(value));

  return {
    contacts,
    filterValue,
    filteredContacts,
    add: handleAdd,
    remove: handleDelete,
    filter: handleFilter,
  };
};
