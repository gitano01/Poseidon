import React, {Component} from 'react'
import './style/poseidon.css';
import {FaUser, FaKey} from "react-icons/all";
import 'bootstrap/dist/css/bootstrap.min.css';

class signUp extends Component {

    constructor(props){
        super(props);
        this.state = { value: '', username:'', password:'', password_confirm:''}
    }
    handleUser(text){
        this.setState({user: text.target.value})
    }
    handlePassword(text){
        this.setState({password: text.target.value})
    }
    handlePassword_confirm(text){
        this.setState({password_confirm: text.target.value})
    }

    imprime_valores(){
        const user = this.state;
        const password = this.state;
        ((user.toString() === "") && (password.toString() === "")) ? console.warn("Los campos estan vacíos") : console.warn(user.toString() + "\n" + password.toString() );
    }

    render(){

        return(
            <div className="container">
                <div className="justify-content-center col-md-8" class="formSignUp">
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-log card-log-b">
                            <div className="card-header">
                                <h5 className="text-center">Inicio de sesión</h5>
                            </div>
                            <div className="card-body">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaUser/></span>
                                    </div>
                                    <input className="form-control col-md-12" placeholder="Nombre de Usuario" autoFocus={true} onClick={(text) => {this.handleUser(text)}}/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input className="form-control col-md-12" placeholder="Contraseña" type="password" onClick={(text) => {this.handlePassword(text)}}/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input className="form-control col-md-12" placeholder="Confirmar contraseña" type="password" onClick={(text) => {this.handlePassword_confirm(text)}}/>

                                </div>
                                <div className="form-group ">
                                    <input className="form-control col-md-12 btn-danger" value="Registrar" type="submit" onClick = {this.imprime_valores()}/>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
export default (signUp);
