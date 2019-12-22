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

  //menerima parameter event dan index
  onDelete = (event, index) => {
    // melakukan trigger agar tidak berpindah page
    event.preventDefault();
    // melakukan penghapusan data dengan parameter index = nomor array dan 1 adalah jumlah array yang di hapus mulai dari index
    this.state.data.splice(index,1);
    // melakukan paksaan render ulang karena tidak menggunakan setState
    this.forceUpdate();
  }
  
  // menerima parameter event
  onAddTodo = (event) => {
    // melakukan trigger agar tidak berpindah page
    event.preventDefault();
    // membuat template sesuai data
    const body = {
      // deklarasi value id dapat dari panjang data ditambah 1
      "id": this.state.data.length + 1,
      // todo berisikan state/variabel inputan
      "todo": this.state.inputan,
      // defautlnya false karena setiap todo adalah false
      "isCompleted": false
    }
    //mengirim template body ke state data dengan fungsi push
    this.state.data.push(body);
    // melakukan paksaan render ulang karena tidak menggunakan setState
    this.forceUpdate();
    // me reset variabel state inputan menjadi kosong
    this.setState({inputan: ''});
  }
  
  render(){
    return(
      <div className="container">
        <table>
          <tr>
            {/** melakukan deklarasi pembuatan table header */}
            <th>Nomor</th>
            <th>Nama Perintah</th>
            <th>Apakah Selesai ?</th>
            <th>Aksi</th>
          </tr>
          {/** melakukan looping data variable state.data */}
          {this.state.data.map((item, index) => {
            //mengecek apakah selesai apa belum dan di translate ke bahasa manusia
          let isCompleted = item.completed ? "Sudah selesai" : "Belum selesai";
            //mengecek jika id kurang dari 10 ditampilkan dan lebih dari itu tidak ditampilkan
          if (item.id < 10){
            return(
              <tr>
                {/** melakukan render id */}
                <td>{item.id}</td>
                {/** melakukan render judul todo */}
                <td>{item.todo}</td>
                {/** melakukan render apakah sudah selesai */}
                <td>{isCompleted}</td>
                <td>
                  <p>
                    <input
                    // memanfaatkan properti onClick sebagai trigger fungsi onDelete yang membawa parameter event dan index
                    onClick={(event) => {this.onDelete(event, index)}}
                    type="submit"
                    // judul tombol
                    value="hapus"
                    />
                  </p>
                </td>
              </tr>
            )
          }
        })}
              <tr>
                {/** tabel data dikosongkan karena blm di butuhkan */}
                <td></td>
                <td>
                  {/** membuat kolom inputan */}
                  <input 
                  //tipe inputan adalah text
                    type="text" 
                    placeholder="Tambahkan todo" 
                    //nilai dari inputan adalah variabel state inputan
                    value={this.state.inputan} 
                    // memanfaatkan properti onChage dengan mengirim event lalu melakukan set data inputan dengan event.target.value
                    onChange={(event) => {this.setState({inputan: event.target.value})}}
                  />
                </td>
                <td></td>
                <td>
                  <p>
                    <input 
                    // memanfaatkan properti onklik untuk trigger fungsi onAddTodo dengan membawa parameter event
                    onClick={(event) => {this.onAddTodo(event)}} 
                    type="submit" 
                    value="tambah" />
                  </p>
                </td>
              </tr>

        </table>
      </div>
    )
  }
}

export default App;
