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
    axios.get('https://jsonplaceholder.typicode.com/todos/')
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
            <th>Nomor</th>
            <th>Nama Perintah</th>
            <th>Apakah Selesai ?</th>
          </tr>
          {this.state.data.map((item, index) => {
          let isCompleted = item.completed ? "Sudah selesai" : "Belum selesai";
  
          if (item.id < 10){
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
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
