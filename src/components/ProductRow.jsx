import React, { Component } from 'react';

class ProductRow extends Component{
    render(){
        var item = this.props.data;
        return(
            <tr>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
            </tr>
        );
    }
}

export default ProductRow;