import PropTypes from 'prop-types';
import { labelID } from 'utils/labels';
import styles from './Filter.module.css';

export const Filter = ({ filterContact, value }) => {

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={labelID.filter}>
        Find contacs by name
      </label>
      <input
        className={styles.input}
        type="search"
        name="filter"
        id={labelID.filter}
        onChange={e => {
          filterContact(e);
        }}
        value={value}
      />
    </div>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  value: PropTypes.string,
};
