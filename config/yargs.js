const argv = require ('yargs')
            .command('listar', 'Imprimie en consola la tabla de multiplicar',{
            base: {
                demand : true,
                alias: 'b'
            },
            limite: {
                default: 20,
                alias: 'l'
            },
            GeneraArchivo : {
                demand : true,
                alias: 'g', 
                type:"boolean"
            }
            })
            .argv