import React from 'react'
import css from './EditContactForm.module.css';

const EditContactForm = () => {
  return (
    <tr>
        <td className={css.td}>
            <input type="text" name='name' required className={css.input}/>
        </td>
        <td className={css.td}>
            <input type='tel' name='number' required className={css.input}/>
        </td>
        <td className={css.td}>
            <button type='button' className={css.confirm}>
                Confirm
            </button>
        </td>
    </tr>
  )
}

export default EditContactForm