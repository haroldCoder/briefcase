import { Component,React } from "react";
import ReactDOM, { render } from 'react-dom';
import koder from '../img/koder2.png'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {Contact} from "./contact.js";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

class Navigation extends Component{
	constructor(props){
		super(props)
		this.contact = new Contact();
	}
	componentDidMount(){
		
	}
    render(){
		return(
			<Navbar bg="dark" expand="lg" className="p-2">
				<img id="koderimg" src={koder}/>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto d-flex">
				    <Link className="nav-link text-light" to="/">HOME</Link>
					<Link className="nav-link text-light" to="/abilities">ABILITIES</Link>
					<Link className="nav-link text-light" to="/networks">NETWORKS</Link>
				</Nav>
				<div className="contact" onClick={this.contact.Update}>
				   <span class="material-icons mess">forum</span>
			   </div>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		)
	}
}
export default Navigation;