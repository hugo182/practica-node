


const {crearArchivo} = require('./multiplicar/multiplicar.js');


crearArchivo(argv.base, argv.limite, argv.GeneraArchivo)
.then(respuesta => console.log(respuesta))
.catch(err => console.log(err));