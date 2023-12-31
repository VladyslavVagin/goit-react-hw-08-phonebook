import css from './EditContactForm.module.css';
var throttle = require('lodash.throttle');

const EditContactForm = ({ setNewName, setNewNumber, onClick }) => {
  const handleChangeName = throttle(e => setNewName(e.target.value), 500, {
    leading: false,
  });
  const handleChangeNumber = throttle(
    e =>
      setNewNumber(e.target.value),
    500,
    { leading: false }
  );

  return (
    <tr>
      <td className={css.td}>
        <form>
        <input
          type="text"
          name="name"
          className={css.input}
          onChange={handleChangeName}
          placeholder="New name"
          aria-label="Input for change the name of contact. If no change ,it will stay same before."
        /></form>
      </td>
      <td className={css.td}>
        <form>
        <input
          type="tel"
          name="number"
          className={css.input}
          onChange={handleChangeNumber}
          placeholder="New number"
          aria-label="Input for change number of contact. if no change, it will stay same before."
        /></form>
      </td>
      <td className={css.td}>
        <button
          type="button"
          className={css.confirm}
          onClick={onClick}
          title="Confirm changes in contact button"
          aria-label="Button for confirm changes in edit form. After confirm - choosen contact will be changed."
        >
          OK
        </button>
      </td>
    </tr>
  );
};

export default EditContactForm;
