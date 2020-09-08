import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//The Root Component
function App(){
  return(
    <>
      <Header />
      <Nav />
    </>
  )
}


//Website Header
function Header(){
  return(
    <header>Ollie's Anonymous</header>
  )
}

//Nav Bar
function Nav(){
  return(
    <nav>
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
