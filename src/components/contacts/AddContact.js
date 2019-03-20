import React, { Component } from 'react';

class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: ''
   }

   onSubmit = e => {
     e.prevent.default(); 
     console.log("inside onSubmit");
   };

   // onChange = (e) => {
   //    this.setState({ [e.target.name]: e.target.value });
   // }

   onChange = e => this.setState({ [e.target.name]: e.target.value });

   render(){
      // destructuring the state object to make the value in the input more readable/easier to handle and pass.  
      // This pulls name, email, and phone from the state object
      const { name, email, phone } = this.state;
      return (
         <div className="card mb-3">
           <div className="card-header">Add Contact</div>
           <div className="card-body">
              <form onSubmit={this.onSubmit}> 
                 <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                     />
                 </div>
                 <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                     />
                 </div>
                 <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                     />
                 </div>
                 <input 
                     type="submit" 
                     value="Add Contact"
                     className="btn btn-primary btn-block"
                  />
              </form>
           </div> 
         </div>
      );
   }
}

export default AddContact;