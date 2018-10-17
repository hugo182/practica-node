//requireds
const fs = require('fs');

let crearArchivo = (pnNumber, pnLimite, pbGeneraArchivo) => {
    

    return new Promise((resolve, reject) => {
        if(!Number(pnNumber)){
            reject('Pusiste una letra, no mams.');
        }

        if(!Number(pnLimite)){
            reject('Pusiste una letra en el límite, no mams.');
        }

        let vaArray = [];
        for(let i=1;i<=pnLimite;i++){
            //console.log(`${pnNumber}x${i} = ${pnNumber * i}`);
            vaArray.push(`${pnNumber}x${i} = ${pnNumber * i}\n`);
        }
        
        if(pbGeneraArchivo){
            fs.writeFile(`tablas/Marisol_${pnNumber}.txt`,vaArray.join(''),(err)=> {
                if(err){
                    reject(err);
                } else {
                    resolve(`El archivo ha sido creado: Marisol_${pnNumber}`);
                }
            });
        } else {
            resolve(vaArray.join('\n'));
        }
        
    }); 
}

module.exports = {
    crearArchivo
}

