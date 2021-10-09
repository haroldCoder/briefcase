import { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from 'axios';

class Forms extends Component{
	state = {
		intro: 'Register',
		end: 'Login',
		name: '',
		email: '',
		password: ''
	}
	Press = () =>{
		if(this.state.intro == "Register"){
		    this.setState({intro: 'Login'});
		    this.setState({end: 'Register'});
		}
		else{
			this.setState({intro: 'Register'});
		    this.setState({end: 'Login'});
		}
	}
	onChangeName = (e) =>{
        this.setState({name: e.target.value});
	}
	onChangeEmail = (e) =>{
		this.setState({email: e.target.value});
	}
	onChangePassword = (e) =>{
		this.setState({password: e.target.value});
	}
	submitData = async(e) =>{
		if(this.state.name != '' && this.state.email != '' && this.state.password != ''){
			e.preventDefault();
			await axios.post('http://localhost:8080/api/users',{
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			});
		}
		else{
			e.preventDefault()
			alert("filds all fields")
		}
	}
	Ui = () =>{
			return(
		        <div className="form container">
		        	<h1>{this.state.intro}</h1>
		        	<form onSubmit={this.submitData}>
		        		<h2>Name</h2>
		        		<input type="text" className="inp" id="name" value={this.state.name} onChange={this.onChangeName}/>
		        		<h2>E-mail</h2>
		        		<input type="text" className="inp" id="email" value={this.state.email} onChange={this.onChangeEmail}/>
		        		<h2>Password</h2>
		        		<input type="password" className="inp" id="password" value={this.state.password} onChange={this.onChangePassword}/>
		        		<button className="btn btn-primary" type="submit">{this.state.intro}</button>
		        	</form>
		        	<footer>
		        		<h3 onClick={this.Press}>you are going to <b id="log">{this.state.end}</b></h3>
		        		<h5 className="m-4">Copyright ©Coderx Development 2021</h5>
		        	</footer>
		     </div>
			);
	}
	render(){
		return(
		 <this.Ui/>
		)
	}
}
export default Forms;