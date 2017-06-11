import Header from './header';

export default class SuhHeader extends Header {
  render() {
    this.el = document.createElement('h2');
    this.el.className = 'subheader';
    this.el.innerHTML = this.options.text;
    return this.el;
  }

}
