const template = document.createElement('template')
template.innerHTML = `
  <div>Welcome to Merchants Fleet!</div>
`


export class MerchantsWebComponentClass extends HTMLElement {
  super();

  constructor() {
    super();
    const sd = this.attachShadow({ mode: 'open' })
    sd.appendChild(template.content.cloneNode(true))
  }
  connectedCallback(){
    console.log('connected')
  }
  disconnectedCallback(){
    console.log('disconnected')
  }
}

customElements.define('merchants-element', MerchantsWebComponentClass)