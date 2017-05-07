//import '../css/main.scss'; Puedo inyectar la css aquí o en el fichero de configuración de webpack

import _ from 'lodash';

var el = document.createElement('div')
el.innerHTML = _.join(['HOLA!!!!', 'Mundo']);

document.body.appendChild(el);