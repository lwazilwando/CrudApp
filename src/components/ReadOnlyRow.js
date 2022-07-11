import React from 'react'


const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <div>
        
        <tr>
                        <td text-align='left'>{contact.name}</td>
                        <td text-align='center' >{contact.lastName}</td>
                        <td text-align='right'>{contact.email}</td>
                        <td>
                            <button type="button" onClick={(event)=> handleEditClick(event, contact)}>edit</button>
                            <button type="button" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>

                        </td>
          </tr>

      
    </div>
    
  )
}

export default ReadOnlyRow;
