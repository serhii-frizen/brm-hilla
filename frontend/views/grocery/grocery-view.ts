import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../../views/view';
import 'multiselect-combo-box/multiselect-combo-box.js';

@customElement('grocery-view')
export class GroceryView extends View {
  items = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

  render() {
    return html`<div>
      <img style="width: 200px;" src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <multiselect-combo-box
        .items=${this.items}
        id="basic"
        label="Element"
        placeholder="Select one or more"
      ></multiselect-combo-box>
    </div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'flex',
      'flex-col',
      'h-full',
      'items-center',
      'justify-center',
      'p-l',
      'text-center',
      'box-border'
    );
  }
}
