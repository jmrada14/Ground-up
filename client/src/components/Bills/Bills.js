import React from "react";
import "./Table.css";
// import HR9 from "../../data/HR9"
import API from "../../utils/BillsAPI";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      votingRecord: [],
        currentBill: false,


    };
  }

  componentDidMount() {
    this.getBill()
  }

  getBill(){
      API.getAllBills()
          .then (data => {
                const currentBill = this.state.currentBill || data.data[0]._id;
                console.log(data.data[0]._id)
              this.setState({
                  bills: data.data,
                currentBill: currentBill

              });

              // console.log(this.state.bills);
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

selectBill = (e) => {
      console.log(e.target.value);
    this.setState({currentBill: e.target.value})
    // console.log(this.state.currentBill);

}

  renderTableData = () => {
      console.log(this.state.bills);
      if(this.state.bills.length) {
          let thisBill = this.state.bills.filter(bill => bill._id === this.state.currentBill);

          return thisBill[0].votingRecord.map((item, index) => {
              const {name, vote, state, party} = item;
              return (
                  <tr key={index}>
                      <td>{name}</td>
                      <td>{vote}</td>
                      <td>{state}</td>
                      <td>{party}</td>
                  </tr>
              );
          });
      }else {
          return false;
      }
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

         <select className='billSelect' onChange={this.selectBill}>
         {this.state.bills.map(optn =>(
            <option value={optn._id}>{optn.title}</option>
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
