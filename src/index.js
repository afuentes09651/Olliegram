import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Nav(props){
  return(
    <h2>testing Ollie</h2>
  );
}

function App(props) {
  return (

      <header>Welcome {props.title}
              <Nav />
      </header>

  );
}

ReactDOM.render(<App title = "Ollie"/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
