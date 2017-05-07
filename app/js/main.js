//import '../css/main.scss'; Puedo inyectar la css aquí o en el fichero de configuración de webpack

import _ from 'lodash';

var el = document.createElement('h1')
el.innerHTML = _.join(['HOLA!!!!', 'Mundo']);

var ref = document.querySelector('.wrapper');
document.body.insertBefore(el, ref);

