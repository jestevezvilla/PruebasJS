//import '../css/main.scss'; Puedo inyectar la css aquí o en el fichero de configuración de webpack

import '../css/wrapper.scss';
import Button from '../js/components/button.js';
import _ from 'lodash';

var el = document.createElement('h1')
el.innerHTML = _.join(['HOLA!!!!', 'Mundo']);

var ref = document.querySelector('.wrapper');
document.body.insertBefore(el, ref);


var hola = new Button({
    text: 'Pulsa aquí'
});

document.body.appendChild(hola.render());

