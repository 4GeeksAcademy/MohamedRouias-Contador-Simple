import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Digit from './components/Digit';


let seconds = 0;
setInterval(() => {
  const sixth = Math.floor(seconds/100000);
  const fifth = Math.floor(seconds/10000);
  const fourth = Math.floor(seconds/1000);
  const third = Math.floor(seconds/100);
  const second = Math.floor(seconds/10);
  const first = Math.floor(seconds/1);
  console.log(first, second, third, fourth, fifth, sixth)


  console.log(seconds)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  )
  seconds++;
}, 1000);

