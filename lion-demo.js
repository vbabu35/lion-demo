import { html, LitElement } from 'lit';

// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import '@lion/ui/define/lion-combobox.js';
import '@lion/ui/define/lion-option.js';

export class LionDemo extends LitElement {
  static properties = {
    header: { type: String },
    counter: { type: Number },
  };
  constructor() {
    super();
    this.listOfOptions = ['apple', 'orange', 'mango']
  }
  render() {
    return html`
    <lion-combobox name="combo" autocomplete="none" .modelValue=${this.listOfOptions[0]} label="Default">
    ${
      this.listOfOptions.map(
        (entry, i) => html`
          <lion-option .choiceValue="${entry}">${entry}</lion-option>
        `,
      )
    }
  </lion-combobox>
    `;
  }
}
customElements.define('lion-demo', LionDemo);