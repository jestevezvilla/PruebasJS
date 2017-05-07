import _ from 'lodash';

import '../../css/button.scss';

export default function Button(options) {
  const defaultValues = {
    text: 'Pulsa',
  };

  const opt = _.extend(defaultValues, options);

  return {
    done() {
      const a = 1;
    },

    beforeRender() {

    },

    finish() {
      const a = 1;
    },

    render() {
      this.beforeRender();
      const el = document.createElement('button');
      el.innerHTML = opt.text;
      return el;
    },
  };
}
