import { html, css, LitElement } from 'lit';

// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-tooltip.js';

export class LionDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lion-demo-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <lion-tooltip has-arrow>
        <lion-button slot="invoker" @click=${this.__increment}>increment</lion-button>
        <span slot="content"> +1 </span>
      </lion-tooltip>
    `;
  }
}

window.customElements.define('lion-demo', LionDemo);
