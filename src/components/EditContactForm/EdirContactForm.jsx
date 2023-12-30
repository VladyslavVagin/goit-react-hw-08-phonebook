import React from 'react'
import css from './EditContactForm.module.css';

const EditContactForm = ({setNewName, setNewNumber, onClick}) => {

  return (
    <tr>
        <td className={css.td}>
            <input type="text" name='name' required className={css.input} onChange={(e) => setNewName(e.target.value)}/>
        </td>
        <td className={css.td}>
            <input type='tel' name='number' required className={css.input} onChange={(e) => setNewNumber(e.target.value)}/>
        </td>
        <td className={css.td}>
            <button type='button' className={css.confirm} onClick={onClick}>
                Confirm
            </button>
        </td>
    </tr>
  )
}

export default EditContactForm