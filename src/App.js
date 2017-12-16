import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductForm from './components/ProductForm.jsx';
import ProductRow from './components/ProductRow.jsx';

var arrayProductos = [{nombre:'computadora', precio:'1000'},
                    {nombre:'impresora', precio:'500'},
                    {nombre:'escanner', precio:'600'}];

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: ''
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(ev){
        debugger;
        var nombre = ev.target.value;

        this.setState({
            name:nombre
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <br/>
          <ProductForm
          productos={ arrayProductos }
          />
          <br/>
          Nombre: <input type='text' placeholder='Ingresar nombre...' onChange={this.onChangeValue}/>
          <br/>
          <br/>
          <br/>
          <label style={{textAlign:'center', color:'green'}}>{this.state.name}</label>
      </div>
    );
  }
}

export default App;
