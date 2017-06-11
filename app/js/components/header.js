export default class Header {
  constructor(options) {
    const defaultValues = {
      text: 'Default',
    };
    this.options = Object.assign({}, defaultValues, options);
    this.el = null;
  }
  render() {
    this.el = document.createElement('h1');
    this.el.className = 'header';
    this.el.innerHTML = this.options.text;
    return this.el;
  }
  addContent(content) {
    this.el.innerHTML = content;
  }
}
