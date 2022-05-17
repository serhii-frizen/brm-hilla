import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../view';
import '@vaadin/grid';

@customElement('expression-builder-view')
export class ExpressionBuilderView extends View {
  items = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

  render() {
    return html` <vaadin-grid>
      <vaadin-grid-column path='connector'></vaadin-grid-column>
    </vaadin-grid> `;
  }
}
