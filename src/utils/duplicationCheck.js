export const duplicationCheck = ({ name }, contacts) => {
  const isDuplicate = false;
  if (contacts.length > 0) {
    const checkingName = Boolean(contacts.find(item => item.name === name));
    if (checkingName) {
      alert(`${name} is already in contacts.`);
      return !isDuplicate;
    }
  }
  return isDuplicate;
};
