import { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Forms from "./forms";

class Contact extends Component{
	UI = () =>{
		ReactDOM.render(
			<section className="panel">
				<div className="title d-flex container-fluid">
					<h2 id="title">SERVICES</h2>
					<h3 className="close">X</h3>
				</div>
				<div className="draw">
					<Forms/>
				</div>
			</section>,
			document.querySelector('.input')
		)
		$("#title").css("color","#00ff95");
		$(".input > .panel > .title > h3").css("color","#EF4040");
		$(".input > .panel > .title > h3").css("font-size","40px");
		$(".input > .panel > .title").css("justify-content","space-between");
		$(".input > .panel > .title").css("align-items","end");
		$("#title").css("font-family","Staatliches");
		$("#title").css("font-size","35px");
		$(".input > .panel > .title").css("background","#E1E1E1AA");
		$(".close").css("cursor","pointer");
        $(".close").on("click",()=>{
			$(".input").remove();
		});
        $(".form > form > input").css("border","none");
		$(".form > form > input").css("border-bottom","2px solid #00FFAF");
		$(".form > form > input").css("background","none");
		$(".form > form > input").css("width","100%");
		$(".form > form > input").css("box-shadow","0px 2px 0px 0px #00e8ff");
		$(".form > form > input").css("margin-bottom","8.5%");
		$(".form > form > h2").css("color","rgb(111 248 255)");
	    $(".form > form > h2").css("font-family","emoji");
		$(".form > h1").css("text-align","center");
		$(".form > h1").css("font-family","fantasy");
		$(".form > h1").css("color","#FFEEFF");
		$(".form > h1").css("margin","10px 0");
		$(".form").css("padding","0 7% 0 7%");
		$("form > .btn").css("margin","0 10%");
		$("form > .btn").css("width","80%");
        $("form > .btn").css("height","25%");
		$(".form > footer > h5").css("color","#888");
		$(".form > footer").css("margin","6%")
		$(".form > footer").css("width","100%")
		$(".form > footer > h3").css("color","#20CEEF");
		$(".form > footer > h3").css("font-family","initial");
		$(".form > footer > h3").css("cursor","pointer");
		$(".form > footer > h3").css("margin","0 20%");
		$(".form > footer > h3").css("margin-right","0");
	}
	Update = () =>{
		$(".panel").append(`
		 <div class="input"></div>
		`);	
		this.UI();	
	}
}
export default Contact;