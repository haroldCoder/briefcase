import { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import c from '../img/c.png';
import csharp from '../img/c#.png';
import cmas from '../img/c++.png';
import css from '../img/css.png';
import html from '../img/html.png';
import java from '../img/java.png';
import js from '../img/js.png';
import python from '../img/python.png';


		
class Abilities extends Component{
	constructor(props){
		super(props)
		this.leguajes = [
           {
			   name: "c++",
			   cover: cmas
		   },
		   {
			   name: "c",
			   cover: c
		   },
		   {
			   name: "c#",
			   cover: csharp
		   },
		   {
			   name: "css",
			   cover: css
		   },
		   {
			   name: "html",
			   cover: html
		   },
		   {
			   name: "java",
			   cover: java
		   },
		   {
			   name: "javascript",
			   cover: js
		   },
		   {
			   name: "python",
			   cover: python
		   }
		];
	}
	render(){
		return(
			<div className="lpanel">
				
			</div> 
		)
	}
	componentDidMount(){
		$(".lpanel").css("width","100%");
		$(".lpanel").css("height","60vh");
		$(".lpanel").css("margin","1% 0");
		$(".panel").css("margin","0 10%")
		$(".lpanel").css("background","#FFFFFF80");
	}
}
export default Abilities;