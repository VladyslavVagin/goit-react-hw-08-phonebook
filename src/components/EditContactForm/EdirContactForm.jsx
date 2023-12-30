import React from 'react';
import css from './EditContactForm.module.css';

const EditContactForm = ({ setNewName, setNewNumber, onClick }) => {
  return (
    <tr>
      <td className={css.td}>
        <input
          type="text"
          name="name"
          required
          className={css.input}
          onChange={e => setNewName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        />
      </td>
      <td className={css.td}>
        <input
          type="tel"
          name="number"
          required
          className={css.input}
          onChange={e => setNewNumber(e.target.value.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3'))}
          pattern="[0-9]{9,12}"
        />
      </td>
      <td className={css.td}>
        <button type="button" className={css.confirm} onClick={onClick}>
          Confirm
        </button>
      </td>
    </tr>
  );
};

export default EditContactForm;
