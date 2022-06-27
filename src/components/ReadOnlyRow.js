import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <div>
        
        <tr>
                        <td>{contact.name}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button type="button" onClick={(event)=> handleEditClick(event, contact)}>edit</button>
                            <button type="button" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>

                        </td>
                        </tr>

      
    </div>
  )
}

export default ReadOnlyRow
