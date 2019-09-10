import React, {Component} from 'react'
import '../../style/poseidon.css';
import {FaUser, FaKey} from "react-icons/all";
import 'bootstrap/dist/css/bootstrap.min.css';

class signUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            username:'',
            password:'',
            password_confirm:''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})

    }
    submitForAdd = e =>{
        e.preventDefault()
        fetch('http://localhost:3000/crud',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(item => {
                if(Array.isArray(item)){
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                }else{
                    console.log("Fallas")
                }
            })
    }


    submitFormEdit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/crud', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                username: this.state.username,
                password: this.state.password

            })
        })
            .then(response => response.json())
            .then(item => {
                if(Array.isArray(item)) {
                    // console.log(item[0])
                    this.props.updateState(item[0])
                    this.props.toggle()
                } else {
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        // if item exists, populate the state with proper data
        if(this.props.item){
            const { id, username,password } = this.props.item
            this.setState({ id, username,password })
        }
    }


    render(){

        return(
            <div className="container">
                <div className="justify-content-center col-md-8" class="formSignUp">
                    <form onSubmit={this.props.item ? this.submitFormEdit : this.submitForAdd} >
                        <div className="card-log card-log-b">
                            <div className="card-header">
                                <h5 className="text-center">Registro de usuario</h5>
                            </div>
                            <div className="card-body">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaUser/></span>
                                    </div>
                                    <input className="form-control col-md-12" placeholder="Nombre de Usuario" autoFocus={true}  name="username" id="username" onChange={this.onChange} value = {this.state.username === null ? '': this.state.username }/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input className="form-control col-md-12" placeholder="Contraseña" type="password" name="password" id="password" onChange={this.onChange} value = {this.state.password === null ? '': this.state.password }/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input className="form-control col-md-12" placeholder="Confirmar contraseña" type="password" onClick={(text) => {this.handlePassword_confirm(text)}}/>

                                </div>
                                <div className="form-group ">
                                    <input className="form-control col-md-12 btn-danger" value="Registrar" type="submit"/>
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
