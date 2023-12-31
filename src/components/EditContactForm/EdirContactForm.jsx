import css from './EditContactForm.module.css';
var throttle = require('lodash.throttle');

const EditContactForm = ({ setNewName, setNewNumber, onClick }) => {
  const handleChangeName = throttle((e) => setNewName(e.target.value), 500, {leading: false});
  const handleChangeNumber = throttle(e => setNewNumber(e.target.value.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')), 500, {leading: false});

  return (
    <tr>
      <td className={css.td}>
        <input
          type="text"
          name="name"
          required
          className={css.input}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          placeholder="New name"
          aria-label="Input for change the name of contact. If no change ,it will stay same before."
        />
      </td>
      <td className={css.td}>
        <input
          type="tel"
          name="number"
          required
          className={css.input}
          onChange={handleChangeNumber}
          pattern="[0-9]{9,12}"
          placeholder="New number"
          aria-label="Input for change number of contact. if no change, it will stay same before."
        />
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
