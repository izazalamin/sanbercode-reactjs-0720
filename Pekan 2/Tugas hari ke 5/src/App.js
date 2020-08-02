import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
  <div >
  <h1>Form Pembelian Buah</h1>
  </div>

  <div className="label">
    <form>
    <label ><b>Nama Pelanggan</b></label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input style={{type:"text" ,placeholder:"Nama User", id :"Nama"}}></input> 
    </form>
  </div><br></br>
  <div className="daftar">
    <form>
    <label ><b>Daftar Item</b></label>
    <input type="checkbox" name="daftar" value="0"> Semangka<br></br></input>
    <input type="checkbox" name="daftar" value="1"> Jeruk <br></br></input>
    <input type="checkbox" name="daftar" value="2"> Nanas<br></br></input>
    <input type="checkbox" name="daftar" value="3"> Salak<br></br></input>
    <input type="checkbox" name="daftar" value="4"> Anggur</input>
    </form>
  </div>
    </div>
  );
}

export default App;
