import React from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';
import {FaUser, FaKey, FaEnvelope} from "react-icons/all";

class AddEditForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            username:'',
            email:'',
            password:'',
            password_confirm:''
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})

    }



    ChecaInput = () => {
    const  {username} = this.state;
    const {email} = this.state;
    const  {password} = this.state;
    const  {password_confirm} = this.state;
    var op =0;

    username.toString() === "" ? alert("","el usuario no puede estar vacío")
        : email.toString() ==="" ? alert("","el email no puede estar vacío")
        : password.toString() ==="" ? alert("","La contraseña no puede estar vacía")
        : password_confirm.toString() ==="" ? alert("","Confirmar contraseña no puede estar vacío")
        : password_confirm.toString() !== password.toString() ? alert("","Las contraseñas no coinciden")
        : this.submitFormAdd()
       }

    submitFormAdd= e =>{
        e.preventDefault()
        fetch('http://localhost:3000/api/users/new',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
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
        fetch('http://localhost:3000/api/newUser', {
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


    render() {
        return (
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FaUser/></span>
                    </div>
                    <Input type="text" placeholder="usuario" name="username" id="username" onChange={this.onChange} value={this.state.username === null ? '' : this.state.username} />
                </FormGroup>
                <FormGroup className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FaEnvelope/></span>
                    </div>
                    <Input type="text" placeholder="correo electrónico" name="email" id="email" onChange={this.onChange} value={this.state.username === null ? '' : this.state.username} />
                </FormGroup>
                <FormGroup className="input-group form-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text"><FaKey/></span>
                    </div>
                    <Input type="password" placeholder="Contraseña" name="password" id="password" onChange={this.onChange} value={this.state.last === null ? '' : this.state.last}  />
                </FormGroup>
                <FormGroup className="input-group form-group">
                    <div className="input-group-prepend">
                    <span className="input-group-text"><FaKey/></span>
                    </div>
                    <Input type="password" placeholder="Confirmar contraseña" name="password_confirm" id="password_confirm" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
                </FormGroup>

                <div className="form-group ">
                    <input className="form-control col-md-12 btn-danger" value="Registrar" type="submit" onClick={this.ChecaInput}/>
                </div>
            </Form>
        );
    }
}

export default AddEditForm
