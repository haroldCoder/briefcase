import { Component,React } from "react";
import ReactDOM, { render } from 'react-dom';
import koder from '../img/koder2.png'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Contect from '../components/contact.js';

class Navigation extends Component{
	constructor(props){
		super(props);
		this.contact = new Contect();
	}
    render(){
		new Contect();
		return(
		     <nav className="navbar d-flex">
				<img src={koder}/>
               <div className="content d-flex">
                   <Link to="/"><h2 className="h1">HOME</h2></Link>
				   <Link to="/abilities"><h2 className="h1">ABILITIES</h2></Link>
				   <Link to="/networks"><h2 className="h1">NETWORKS</h2></Link>
		       </div>
			   <div className="contact" onClick={this.contact.Update}>
				   <span class="material-icons mess">forum</span>
			   </div>
		     </nav>
		)
	}
}
export default Navigation;