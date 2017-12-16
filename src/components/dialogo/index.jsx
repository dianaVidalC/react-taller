import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Dialogo extends Component{
    constructor(props){
        super(props);

        this.state = {
            open:false
        };
        this._handleOnClick = this._handleOnClick.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }
    _handleOnClick(ev){
        let estado = !this.state.open;

        this.setState({
            open:estado
        })
    }
    _handleClose(ev){
        this.setState({
            open:false
        })
    }
    render(){
        let{open}= this.state;
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this._handleClose}
            />,
            <FlatButton
                label="Aceptar"
                primary={true}
                disabled={true}
                onClick={this._handleClose}
            />,
        ];
        return(
            <div>
                <Dialog
                    title="Dialogo de ejemplo"
                    modal={true}
                    open={open}
                    actions={actions}
                />

                <FlatButton
                    label="click"
                    primary={true}
                    onClick={this._handleOnClick}/>
            </div>
        );
    }
}

export default Dialogo;