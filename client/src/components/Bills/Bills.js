import React from "react";
import "./Table.css";
// import HR9 from "../../data/HR9"
import API from "../../utils/BillsAPI";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // members: [
      //    { name: 1, vote: 'Wasif', state: 21, party: 'wasif@email.com' },
      //    { name: 2, vote: 'Ali', state: 19, party: 'ali@email.com' },
      //    { name: 3, vote: 'Saad', state: 16, party: 'saad@email.com' },
      //    { name: 4, vote: 'Asad', state: 25, party: 'asad@email.com' }
      // ]
      bills: [],
      votingRecord: [],

    };
  }

  componentDidMount() {
    API.getAllVotingRecord()
      .then(data => {
        const votingRecord = [];
        data.data.forEach(item => {
          votingRecord.push(item.votingRecord);
        });

        this.setState({
          bills: data.data,
          votingRecord: votingRecord[0]
          
        });

        console.log(this.state.bills);
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.bills.title);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }



  renderTableData() {
    return this.state.votingRecord.map((item, index) => {
      const { name, vote, state, party } = item;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{vote}</td>
          <td>{state}</td>
          <td>{party}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 left-align">
            <div
              className="section no-pad-bot green lighten-5"
              id="index-banner"
            >
              <div className="container">
                <br />
                <h1 className="header center  green-text text-darken-3">
                  Ground-Up
                </h1>
                <div className="row center">
                  <h5 className="header col s12 light">
                    We can improve, so let's do it...from the ground up! <hr />
                    This interactive table of bills focuses on all environmental
                    bills passed this year. It also has a few other bills
                    regarding the newer issues our country now faces.
                  </h5>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div>

          <div className="input-field col s12">

         <select >
         {this.state.bills.map(optn =>(
            <option value={optn.title}>{optn.title}</option>
         ))}
         </select>
           
           </div>
           

          <table id="members">
            <tr>
              <th>Name</th>
              <th>Vote</th>
              <th>State</th>
              <th>Party</th>
            </tr>

            {this.renderTableData()}
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
