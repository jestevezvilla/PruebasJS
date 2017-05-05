import '../css/style.scss';
import '../css/nav.scss';

import _ from 'lodash';

var el = document.createElement('div')
el.innerHTML = _.join(['HOLA', 'Mundo']);

document.body.appendChild(el);