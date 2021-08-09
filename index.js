// Import stylesheets
import './style.css';
import './merchants.web.component.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>Web Component Starter</h1>
<merchants-element></merchants-element>
`;