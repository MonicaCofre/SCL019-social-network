// Este es el punto de entrada de tu aplicacion
//import { myFunction } from "./lib/index.js";
//myFunction();


import { initRouter } from './lib/routes.js';

//---------------init será la función que llame a initRouter apenas cargue el sitio-----
const init = () => {
  initRouter();
}

window.addEventListener('load', init);
