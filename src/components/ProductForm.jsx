import React, { Component } from 'react';
import ProductRow from './ProductRow.jsx'

class ProductForm extends Component{
    render(){
        var totalProductos = this.props.productos;
        var items = [];

        totalProductos.map((product,i) =>{
            items.push(<ProductRow data={ product } key={i}/>);
        })

        return(
            <div>
            <b><span>{'Cantidad total: ' + totalProductos.length}</span></b>
                <br/>
                <br/>
                <center>
                <table border="{1px}">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items}
                    </tbody>
                </table>
                </center>
            </div>
        );
    }
}

export default ProductForm;