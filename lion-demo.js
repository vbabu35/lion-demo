import { html, css, LitElement } from 'lit';

// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-tooltip.js';

export class LionDemo extends LitElement {
  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <lion-tooltip has-arrow>
        <lion-button slot="invoker" @click=${() => {this.counter += 1; console.log(this.counter);}}>increment</lion-button>
        <span slot="content"> +1 </span>
      </lion-tooltip>
    `;
  }
}

customElements.define('lion-demo', LionDemo);
