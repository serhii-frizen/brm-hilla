import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../../views/view';
import './expression-builder-view';

@customElement('grocery-view')
export class GroceryView extends View {
  items = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

  render() {
    return html`<div>
      <expression-builder-view style="width: 50rem, height: 50rem"> </expression-builder-view>
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
