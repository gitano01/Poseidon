import React, {Component} from 'react'
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import 'firebase/auth'
import firebaseConfig from '../DataBasesSettings/firebase'
import '../style/poseidon.css';
//{/*import logo from '../logo.svg';}*/
import {FaUser, FaKey} from "react-icons/all";
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider()};

class Login extends Component {

    constructor(props){
        super(props);
        this.state = { value: "", username:"", password:""}
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }


    render(){

        return(
                <div className="container">

                      <div class="justify-content-center col-md-8" className="formulario">
                          <form onSubmit={this.handleSubmit}>
                              <div class="card-log card-log-b">
                                  <div class="card-header">
                                      <h5 class="text-center">Inicio de sesión</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><FaUser/></span>
                                        </div>
                                          <input className="form-control col-md-12" placeholder="Nombre de Usuario"/>

                                    </div>
                                      <div className="input-group form-group">
                                          <div className="input-group-prepend">
                                              <span className="input-group-text"><FaKey/></span>
                                          </div>
                                          <input className="form-control col-md-12" placeholder="Contraseña"/>

                                      </div>
                                    <div className="form-group ">
                                          <input className="form-control col-md-12 btn-danger" value="Iniciar sesión" type="submit"/>
                                    </div>

                                  </div>
                              </div>
                          </form>
                      </div>

                </div>
            );
        }
}
export default withFirebaseAuth({providers, firebaseAppAuth})(Login);