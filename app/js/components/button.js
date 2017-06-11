// const _ = require('lodash');
import _ from 'lodash';
import '../../css/button.scss';

export default function Button(options) {
  const defaultValues = {
    text: 'Pulsa',
  };

  const opt = _.extend(defaultValues, options);

  this.el = null;

  return {

    done() {

    },

    beforeRender() {

    },

    finish() {

    },

    render() {
      this.beforeRender();
      this.el = document.createElement('button');
      this.el.className = 'jvsc_button';
      this.el.innerHTML = opt.text;
      return this.el;
    },
  };
}
