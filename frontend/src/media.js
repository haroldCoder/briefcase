import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from "react-router-dom";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navigation from "./components/Navigation";

function main(){
if(window.innerWidth <= 600){
   const a = document.querySelectorAll(".content > a");
   $(a[1]).remove()
   $(a[2]).remove()
   $(".responsive").remove()
   $("body").attr("style",`width: ${window.innerWidth}px !important`);
   $("#root").attr("style",`width: ${window.innerWidth}px !important`);
   $(".main").attr("style",`width: ${window.innerWidth}px !important`);
   $(".navbar").attr("style",`width: ${window.innerWidth}px !important`);
   $(".present").attr("style",`display: block !important`);
	  $(".navbar").append(`
    <div class="pleg">
	<span class="material-icons">expand_more</span>
	</div>
  `);
  $(".pleg").css("position","absolute")
  $(".pleg").css("top","70%")
  $(".pleg").css("color","#00DDFF");
  $(".pleg > span").css("font-size","50px");
  $(".pleg").css("left","32%");
  $(".pleg").css("padding","0 14% 0 14%") 
   
   $(".pleg").click(()=>{
	   if($(".menu").length == 0){
	    $(".panel").append(`
    <div class="menu"></div>
   `);
   ReactDOM.render(
	   <section>
		   <div className="panel d-flex">
			   <Router>
			       <a href="/"><h2>HOME</h2></a>
		           <a href="/abilities"><h2>Abilities</h2></a>
				   <a href="/networks"><h2>NETWORKS</h2></a>
			   </Router>
		   </div>
	   </section>,
	   document.querySelector(".menu")
   );
   $(".menu").css("position","absolute");
   $(".menu").css("top","20%");
   $(".menu").css("left","0%");
   $(".menu").css("width","100%");
   $(".menu").css("height","100%")
   $(".menu > section > .panel").css("flex-flow","column");
   $(".menu").css("background","#000000F0");
   $(".menu > section > .panel").css("text-align","center");
   $(".menu > section").css("height","100%");
   $(".menu > section > .panel").css("height","80%");
   $(".menu > section > .panel").css("justify-content","space-around")
   $(".menu > section > .panel > a").css("color","#08d1ff");
   $(".menu > section > .panel > a").css("text-decoration","none");
   $(".menu > section > .panel > a").css("border-bottom","3px solid #08d1ff");
   $(".menu > section > .panel").css("margin"," 1% 18%");
   $(".menu > section > .panel > a > h2").css("font-size","50px");
   $(".menu > section > .panel > a > h2").css("font-family","Staatliches");
	   }
	   else{
		   $(".menu").remove();
	   }
   })
   $(".lenp > .card").css("width","17vh");
   $(".lpanel").attr("style","padding: 0 0 50px !important");
   $(".lenp").css("margin-top","8%");
   $(".lpanel > h2").css("margin","7% 0");
   $(".netw").attr("style","margin: 8vh 2%");
   $(".social").attr("style","margin: 6% 8% !important");
   if($(".profile").length > 0){
     $(".contact").remove()
  }
}
}
export default main;
