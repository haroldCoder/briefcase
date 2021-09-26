import { Component,React } from "react";
import ReactDOM from 'react-dom';
import Nav from './components/Navigation.js';
import Home from './components/home.js';
import Abili from './components/abilities.js';
import $ from 'jquery';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component{
	constructor(props){
		super(props);
		this.home = new Home();
	}
	componentDidMount(){
		this.Update();
	}
	componentWillUpdate(){
		this.Update();
	}
	render(){
		return(
			<Router>
			<div className="main container-fluid">
			  <Nav/>
			  <h2 className="maintitle">Coderx developers</h2>
			  <div className="panel">
				  <Route path="/" exact component={Home}/>
				  <Route path="/abilities" exact component={Abili}/>
			  </div>
		    </div>
			</Router>
		)
	}
	Update = () =>{
	  $(".navbar > .content").css("border-bottom-left-radius","120px");
	  $(".navbar > .content").css("border-bottom-right-radius","120px");
	  $(".content > h2").css("color","#30BCFF");
	  $(".content > h2").css("font-family","fantasy");
	  $(".content > h2").css("margin","0 4%");
	  $(".content > h2").css("font-size","50px");
	  $(".content > img").css("width","12vh");
	  $(".navbar > img").css("height","9.5vh");
	  $(".navbar > img").css("border-radius","100%");
	  $(".navbar > img").css("margin","0 3.5%");
	  $(".panel").css("height","80%");
	  $(".panel").css("width","100%");
	  $(".maintitle").css("position","relative");
	  $(".maintitle").css("left","40%");
	  $(".maintitle").css("margin",".5% 0");
	  $(".maintitle").css("color","#17f7e27a");
	  $(".maintitle").css("font-size","20px");
	  $(".maintitle").css("display","inline");
	  $(".content > h2").css("cursor","pointer");
	}
}
export default App;