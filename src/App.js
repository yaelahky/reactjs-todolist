import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {

  }

  state = {
    data: [
      {
        "id": 1,
        "todo": "Menyiram bunga",
        "isCompleted": true
      },
      {
        "id": 2,
        "todo": "Menyapu lantai",
        "isCompleted": false
      }
    ],
    inputan: ''
  }

  onDelete = (event, index) => {
    event.preventDefault();
    this.state.data.splice(index,1);
    this.forceUpdate();
  }

  onAddTodo = (event) => {
    event.preventDefault();
    const body = {
      "id": this.state.data.length + 1,
      "todo": this.state.inputan,
      "isCompleted": false
    }
    this.state.data.push(body);
    this.forceUpdate();
    this.setState({inputan: ''});
  }
  
  render(){
    return(
      <div className="container">
        <table>
          <tr>
            <th>Nomor</th>
            <th>Nama Perintah</th>
            <th>Apakah Selesai ?</th>
            <th>Aksi</th>
          </tr>
          {this.state.data.map((item, index) => {
          let isCompleted = item.completed ? "Sudah selesai" : "Belum selesai";
  
          if (item.id < 10){
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.todo}</td>
                <td>{isCompleted}</td>
                <td><p><input onClick={(event) => {this.onDelete(event, index)}} type="submit" value="hapus" /></p></td>
              </tr>
            )
          }
        })}
              <tr>
                <td></td>
                <td>
                  <input 
                    type="text" 
                    placeholder="Tambahkan todo" 
                    value={this.state.inputan} 
                    onChange={(event) => {this.setState({inputan: event.target.value})}}
                  />
                </td>
                <td></td>
                <td><p><input onClick={(event) => {this.onAddTodo(event)}} type="submit" value="tambah" /></p></td>
              </tr>

        </table>
      </div>
    )
  }
}

export default App;
