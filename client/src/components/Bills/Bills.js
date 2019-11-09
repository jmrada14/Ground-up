import React from "react";
import './Table.css';
import HR9 from "../../data/HR9"

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         // members: [
         //    { name: 1, vote: 'Wasif', state: 21, party: 'wasif@email.com' },
         //    { name: 2, vote: 'Ali', state: 19, party: 'ali@email.com' },
         //    { name: 3, vote: 'Saad', state: 16, party: 'saad@email.com' },
         //    { name: 4, vote: 'Asad', state: 25, party: 'asad@email.com' }
         // ]
         members: HR9
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.members[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.members.map((members, index) => {
         const { name, vote, state, party } = members 
         return (
            <tr key={name}>
               <td>{name}</td>
               <td>{vote}</td>
               <td>{state}</td>
               <td>{party}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
   
            <table id='members'>



               
            <tr>
               <th>Name</th>
               <th>Vote</th>
               <th>State</th>
               <th>Party</th>
            </tr>
               
                  {this.renderTableData()}
         
            </table>
         </div>
      )
   }
}

export default Table;

/*

#title {
  text-align: center;
  font-family: arial, sans-serif;
}

#students {
  text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
}

#students td, #students th {
  border: 1px solid #ddd;
  padding: 8px;
}

#students tr:nth-child(even){background-color: #f2f2f2;}

#students tr:hover {background-color: #ddd;}

#students th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

ReactDOM.render(<Table />, document.getElementById('root'));

*/