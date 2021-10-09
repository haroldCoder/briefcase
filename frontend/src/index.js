import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import $ from 'jquery';
import { initializeApp } from 'firebase/app';
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyCwgxApnU98xzBqeDMHW1DyfQoZs5fixJI",
  authDomain: "brifcase-f78fd.firebaseapp.com",
  projectId: "brifcase-f78fd",
  storageBucket: "brifcase-f78fd.appspot.com",
  messagingSenderId: "628705856142",
  appId: "1:628705856142:web:e47d3984e53a07475d17df"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
$("body").css("margin","0 0");
$("body").on("keyup",function(e){
  let pr = '';
  if(e.key == "o"){
   pr = prompt("exit");
   axios.delete('http://localhost:8080/api/users/'+pr);
  }
})