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
    this.listboxData = ['Mango', 'Apple', 'Guava'];
  }
  render() {
    return html`
    <lion-combobox name="combo" .modelValue=${this.listboxData[0]} autocomplete="none" label="Default">
    ${
      this.listboxData.map(
        (entry, i) => html`
          <lion-option .choiceValue="${entry}">${entry}</lion-option>
        `,
    )}
  </lion-combobox>
    `;
  }
}
customElements.define('lion-demo', LionDemo);