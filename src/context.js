import React, { Component } from 'react';

const Context = React.createContext(); // React.createContext() creates a Context object, which is stored in variable 'Context'.

const reducer = (state, action) => {
   switch (action.type) {
      case 'DELETE_CONTACT':
         return {
            ...state,
            contacts: state.contacts.filter(contact => 
               contact.id !== action.payload)
         };
      default:
         return state;
   }
};

// state goes in the Provider class and it will be a global state 
export class Provider extends Component {
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
      ],
      dispatch: action => {
         this.setState(state => reducer(state, action))
      }
   };
   
   render(){
      return (
        <Context.Provider value={this.state} >
            {this.props.children}
        </Context.Provider>
      );

   }
}

export const Consumer = Context.Consumer;
