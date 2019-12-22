import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  state = {
    data: []
  }

  fetchData = () => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render(){
    return(
      <div className="container">
        <table>
          <tr>
            <th>Menampilkan</th>
            <th>20 teratas dengan index genap. </th>
            <th>Apakah sesuai ? (Masih Bingung Bro...)</th>
          </tr>
          {this.state.data.map((item, index) => {
          let isCompleted = item.completed ? "Sudah selesai" : "Belum selesai";
  
          if (item.id <= 20){
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
                <td>{isCompleted}</td>
              </tr>
            )
          }
        })}

        </table>
      </div>
    )
  }
}

export default App;
