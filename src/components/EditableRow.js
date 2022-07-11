import React from 'react'


const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick ,}) => {
  return (
    <div>
      
      <table>
      <tr>
            <td>
                <input type="text" required="required" placeholder="Enter your name"  name="name" onChange={handleEditFormChange}value={editFormData.name}/>
            </td>
            <td>
            <input type="text" required="required" placeholder="Enter your last name"  name="lastName" onChange={handleEditFormChange}value={editFormData.lastName}/>
            </td>
            <td>
            <input type="text" required="required" placeholder="Enter your email"  name="email" onChange={handleEditFormChange}value={editFormData.email}/>
            </td>
            <td>
                <button type='submit' >Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>

      </tr>
      </table>


    </div>
  );
};

export default EditableRow;
