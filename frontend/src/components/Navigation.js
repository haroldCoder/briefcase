import { Component,React } from "react";
import ReactDOM from 'react-dom';
import koder from '../img/koder2.png'

class Navigation extends Component{
	render(){
		return(
		     <nav className="navbar d-flex">
				<img src={koder}/>
               <div className="content d-flex">
                   <h2 className="h1">HOME</h2>
				   <h2>ABILITIES</h2>
				   <h2 className="h1">NETWORKS</h2>
		       </div>
		     </nav>
		)
	}
}
export default Navigation;