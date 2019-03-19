import React, { Component } from 'react';
import Contact from './Contact'


class Contacts extends Component {
   state = {
      contacts: [
         {
            id: 1,
            name: "John Doe",
            email: "jd@gmail.com",
            phone: "555-555-5555"
         },
         {
            id: 2,
            name: "Jane Smith",
            email: "js@gmail.com",
            phone: "123-456-7891"
         },
         {
            id: 3,
            name: "Andrew Pierce",
            email: "ap@gmail.com",
            phone: "515-525-5353"
         }
      ]
   }

   deleteContact = (id) => {
      const { contacts } = this.state;

      const newContacts = contacts.filter(contact => contact.id !== id);

      this.setState({
         contacts: newContacts
      })
   }
   
   render() {
      // destructuring the state object
      const { contacts } = this.state;
      
      return (
         <React.Fragment>
            {contacts.map(contact => (
               <Contact 
                  key={contact.id}
                  contact={contact} // this is the entire contact object from the contacts array in the state object
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
               />
            ))}
         </React.Fragment>
      );
   }
}

export default Contacts;