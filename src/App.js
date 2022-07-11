import React, {useState, Fragment} from 'react';
import {nanoid} from 'nanoid'
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';


const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData , setAddFormData] = useState({
    name:"",
    lastName:"",
    email:"",
  });
  const [editFormData, setEditFormData] = useState({
    name:"",
    lastName:"",
    email:"",
  })

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);

  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id:nanoid(),
      name: addFormData.name,
      lastName: addFormData.lastName,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);


  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name:editFormData.name,
    lastName:editFormData.lastName,
    email:editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id=== editContactId)
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null)
  };

  const handleEditClick=(event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);


    const formValues = {
      name:contact.name,
      lastName:contact.lastName,
      email:contact.email,
    };
    setEditFormData(formValues)
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts=[...contacts];
    const index = contacts.findIndex((contact)=> contact.id=== contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);

  };
  return (
    
    <div className='Container'>
        <div className='Container1'>
       <form onSubmit={handleEditFormSubmit}>
              
                
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
            
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
          
                  {editContactId=== contact.id? ( <EditableRow editFormData={editFormData}
                   handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}/>):
                  (<ReadOnlyRow contact = {contact}
                   handleEditClick={handleEditClick}
                   handleDeleteClick={handleDeleteClick}
                   />)}
                   
                  </Fragment>
                 
                ))}
            
              </tbody>
              </table>
             
              </form>
              </div>

                
                
                <form onSubmit={handleAddFormSubmit}>
                  <fieldset>
                    <legend>Add New Employee</legend>
                
                  <label>Name</label><br/><br/>
                  <input type="text" name="name" required="required" placeholder="Enter your name" onChange={handleAddFormChange}/><br/><br/>
                  <label>Last Name</label><br/><br/>
                  <input type="text" name="lastName" required="required" placeholder="Enter your last name" onChange={handleAddFormChange}/><br/><br/>
                  <label>Email</label><br/><br/>
                  <input type="email" name="email" required="required" placeholder="Enter your email" onChange={handleAddFormChange}/><br/><br/>
                  <button type='submit'>Add Employee</button>

                  </fieldset>
                </form>
                
              
      
    </div>
  )
}

export default App;

