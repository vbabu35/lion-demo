import { html, css, LitElement } from 'lit';

import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-input-date.js';
import '@lion/ui/define/lion-textarea.js';
import '@lion/ui/define/lion-button.js';

export class LionFormOrganism extends LitElement {
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
    <lion-form>
        <form>
          <lion-fieldset name="personal-info">
            <legend>Personal Information</legend>
            <lion-input name="name" label="Name"></lion-input>
            <lion-input-date name="birthdate" label="Birthdate"></lion-input-date>
            <lion-input name="email" label="Email" type="email"></lion-input>
            <lion-textarea name="comments" label="Comments"></lion-textarea>
            <button @click=${ev => console.log(ev.target.parentElement.modelValue)} type="submit">Submit</lion-button>
          </lion-fieldset>
        </form>
    </lion-form>
    `;
  }
}

window.customElements.define('lion-form-organism', LionFormOrganism);
