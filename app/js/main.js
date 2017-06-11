// Librerías de terceros
import _ from 'lodash';

// import '../css/main.scss'; Puedo inyectar la css aquí o en el fichero de configuración de webpack
import '../css/wrapper.scss';

import icono from '../img/freepik.jpg';

// Componente Boton basado en el patrón módulo
import Button from '../js/components/button';
import InputText from '../js/components/inputText';
import Header from '../js/components/header';
import Subheader from '../js/components/subheader';

// Componente para observar el DOM
import Mutation from '../js/helpers/mutation';

// Web Component (Custom Elements)
import '../js/components/progressBar';

let el = document.createElement('h1');
el.id = 'MainTitle';

// Start observing
// const h1Observer = new Mutation(el);
// h1Observer.observe();

el.innerHTML = _.join(['HOLA!!!!', 'Mundo']);


const ref = document.querySelector('.wrapper');
document.body.insertBefore(el, ref);


const head = new Header({ text: 'Cabecera con clase' });
document.body.appendChild(head.render());

const subhead = new Subheader({ text: 'SubCabecera con clase' });
document.body.appendChild(subhead.render());

// Componente Boton basado en el patrón módulo
const hola = new Button({
  text: 'Pulsa aquí',
});
document.body.appendChild(hola.render());

hola.el.onclick = () => subhead.addContent('Cambio de cabecera');

const inputObserver = new Mutation(subhead.el);
inputObserver.observe();


const input = new InputText({ value: 21 });
document.body.appendChild(input.render());


// Web Component (Custom Elements)
el = document.createElement('custom-progress-bar');
el.progress = 20;
document.body.appendChild(el);


const img = document.createElement('img');
img.src = icono;
document.body.appendChild(img);

