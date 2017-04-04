import React from 'react';
import ReactDOM from 'react-dom';


let script = document.createElement('script')
script.src = 'http://localhost:3333/build/component.js'
document.body.appendChild(script)


window.setInterval(() => {
  if(window.component) {
ReactDOM.render(<window.component />, document.querySelector('#main'));
}
},200)
