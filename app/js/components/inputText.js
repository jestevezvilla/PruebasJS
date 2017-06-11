import _ from 'lodash';

export default function InputText(options) {
  const defaultValues = {
    value: '',
  };
  const opt = Object.assign({}, defaultValues, options);

  return {

    el: null,

    beforeRender() {

    },

    finish() {

    },
    render() {
      this.el = document.createElement('input');
      this.el.value = opt.value;

      this.el.oninput = () => this.el.setAttribute('value', this.el.value);

      return this.el;
    },
  };
}
