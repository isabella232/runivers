import { Panel, PanelOptions } from './PanelControl';
import './LegendPanelControl.css';

export interface LegendPanelOptions extends PanelOptions {
  colors?: Array<[number, string, string?]>;
}

const OPTIONS: LegendPanelOptions = {
  addClass: 'legend-panel'
};

export class LegendPanelControl extends Panel {

  constructor(public options: LegendPanelOptions) {
    super(Object.assign({}, OPTIONS, options));
    this._createLegendBody();
  }

  private _createLegendBody() {
    const element = document.createElement('div');
    element.className = 'panel-body__legend';

    this.options.colors.forEach((c) => {
      element.appendChild(this._createLegendItem(c));
    });

    this.updateBody(element);
    return element;
  }

  private _createLegendItem(c, interactive = false) {
    const block = document.createElement('div');
    block.className = 'panel-body__legend--block';

    const [name, color, text] = c;

    if (interactive) {
      const colorInput = document.createElement('input');
      colorInput.setAttribute('type', 'color');
      colorInput.value = color;
      block.appendChild(colorInput);
      colorInput.onchange = () => {
        const changedColor = this.options.colors.find((x) => x[0] === name);
        changedColor[1] = colorInput.value;
        nameBlock.innerHTML = getName(colorInput.value);
        this.emitter.emit('change', this.options.colors);
      };
      const getName = (value) => {
        return ` - ${name} (${value})`;
      };
      const nameBlock = document.createElement('span');
      nameBlock.className = 'panel-body__legend--name';
      nameBlock.innerHTML = getName(color);

      block.appendChild(nameBlock);
    } else {
      const colorSymbol = document.createElement('div');
      colorSymbol.className = 'panel-body__legend--color';
      colorSymbol.style.backgroundColor = color;
      block.appendChild(colorSymbol);

      const nameBlock = document.createElement('div');
      nameBlock.className = 'panel-body__legend--name';
      nameBlock.innerHTML = `${text}`;
      block.appendChild(nameBlock);
    }
    return block;
  }

}
