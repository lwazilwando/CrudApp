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
    email:""
  });
  const [editFormData, setEditFormData] = useState({
    name:"",
    lastName:"",
    email:""
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

  const hamdleEditFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id:nanoid(),
      name: addFormData.name,
      lastName: addFormData.lastName,
      email: addFormData.email
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);


  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id:  editedContact,
      name:editFormData.name,
    lastName:editFormData.lastName,
    email:editFormData.email
    }

    const newContact = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id=== editContactId)
    newContact[index] = editedContact;

    setContacts(newContact);
    setEditContactId(null)
  };

  const handleEditClick=(event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);


    const formValues = {
      name:contact.name,
      lastName:contact.lastName,
      email:contact.email
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
    <div>
       <form onSubmit={handleEditFormSubmit}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th></th>
                  </tr>
                </thead>
            
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
                 
                  
                  

                  {editContactId=== contact.id? ( <EditableRow editFormData={editFormData} hamdleEditFormChange={hamdleEditFormChange} />):
                  (<ReadOnlyRow contact = {contact}
                   handleEditClick={handleEditClick}
                   handleCancelClick={handleCancelClick}
                   handleDeleteClick={handleDeleteClick}
                   />)}
                 

                  
                  </Fragment>
                 
                ))}
                

              </tbody>
              </table>
              </form>

                <h1>Add New Employee</h1>
                <form onSubmit={handleAddFormSubmit}>
                  <input type="text" name="name" required="required" placeholder="Enter your name" onChange={handleAddFormChange}/>
                  <input type="text" name="lastname" required="required" placeholder="Enter your last name" onChange={handleAddFormChange}/>
                  <input type="text" name="email" required="required" placeholder="Enter your email" onChange={handleAddFormChange}/>
                  <button type='submit'>Add Employee</button>
                </form>
              
      
    </div>
  )
}

export default App;

