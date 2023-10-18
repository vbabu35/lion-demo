import { html, LitElement, ScopedElementsMixin } from 'ing-web/lit-2.js';
import { IngButton } from 'ing-web/button.js';
import { IngTooltip } from 'ing-web/tooltip.js';

export class LionDemo extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
    return {
      'ing-button': IngButton,
      'ing-tooltip': IngTooltip
    };
    }

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };
  constructor() {
    super();
    this.header = 'Hey dev';
    this.counter = 0;
  }
  render() {
    return html`
      <h1>${this.header}! Increment is at Nr: ${this.counter}</h1>
      <ing-tooltip has-arrow>
        <ing-button slot="invoker" @click=${() => {this.counter += 1; console.log(this.counter);}}>increment</ing-button>
        <span slot="content"> +1 </span>
      </ing-tooltip>
    `;
  }
}
customElements.define('lion-demo', LionDemo);