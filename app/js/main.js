// Librerías de terceros
import _ from 'lodash';

// import '../css/main.scss'; Puedo inyectar la css aquí o en el fichero de configuración de webpack
import '../css/wrapper.scss';

// Componente Boton basado en el patrón módulo
import Button from '../js/components/button';

// Web Component (Custom Elements)
import '../js/components/progressBar';

let el = document.createElement('h1');
el.innerHTML = _.join(['HOLA!!!!', 'Mundo']);

const ref = document.querySelector('.wrapper');
document.body.insertBefore(el, ref);


// Componente Boton basado en el patrón módulo
const hola = new Button({
  text: 'Pulsa aquí',
});
document.body.appendChild(hola.render());


// Web Component (Custom Elements)
el = document.createElement('custom-progress-bar');
el.progress = 20;
document.body.appendChild(el);

