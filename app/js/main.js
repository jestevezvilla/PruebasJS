//import '../css/main.scss'; Puedo inyectar la css aquí o en el fichero de configuración de webpack
import '../css/wrapper.scss';

//Componente Boton basado en el patrón módulo
import Button from '../js/components/button.js';

//Web Component (Custom Elements)
import '../js/components/progressBar.js';

//Librerías de terceros
import _ from 'lodash';

var el = document.createElement('h1')
el.innerHTML = _.join(['HOLA!!!!', 'Mundo']);

var ref = document.querySelector('.wrapper');
document.body.insertBefore(el, ref);


//Componente Boton basado en el patrón módulo
var hola = new Button({
    text: 'Pulsa aquí'
});
document.body.appendChild(hola.render());


//Web Component (Custom Elements)
var el = document.createElement('custom-progress-bar');
el.progress = 20;
document.body.appendChild(el);



