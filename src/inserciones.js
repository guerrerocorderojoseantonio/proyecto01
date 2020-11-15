//PARA EMPEZAR, TENEMOS QUE CREAR UNA COLECCION E INSERTAR DATOS EN LA MISMA
db.ordenadores.insertMany([
    { nombre: "pc-01", ram: 8, procesador: { marca: "intel", modelo: "i3", nucleos: 2 }, teclado : true , raton: false},
    { nombre: "pc-02", ram: 12, procesador: { marca: "intel", modelo: "i5", nucleos: 4 }, teclado : true , raton: true},
    { nombre: "pc-03", ram: 6, procesador: { marca: "amd", modelo: "ryzen3", nucleos: 4 }, teclado : false , raton: false},
    { nombre: "pc-04", ram: 16, procesador: { marca: "intel", modelo: "pentium", nucleos: 2 }, teclado : true , raton: true},
    { nombre: "pc-05", ram: 8, procesador: { marca: "amd", modelo: "ryzen5", nucleos: 6 }, teclado : true , raton: false},
    { nombre: "pc-06", ram: 64, procesador: { marca: "intel", modelo: "xeon", nucleos: 12 }, teclado : false , raton: false},
    { nombre: "pc-07", ram: 6, procesador: { marca: "intel", modelo: "i3", nucleos: 4 }, teclado : false , raton: true},
    { nombre: "pc-08", ram: 4, procesador: { marca: "amd", modelo: "ryzen3", nucleos: 4 }, teclado : false , raton: true},
    { nombre: "pc-09", ram: 10, procesador: { marca: "intel", modelo: "pentium", nucleos: 2 }, teclado : true , raton: true},
    { nombre: "pc-10", ram: 16, procesador: { marca: "amd", modelo: "ryzen3", nucleos: 4 }, teclado : true , raton: true},
    { nombre: "pc-11", ram: 8, procesador: { marca: "amd", modelo: "ryzen5", nucleos: 6 }, teclado : true , raton: true},
    { nombre: "pc-12", ram: 8, procesador: { marca: "intel", modelo: "i3", nucleos:  4 }, teclado : false , raton: true},
    { nombre: "pc-13", ram: 4, procesador: { marca: "intel", modelo: "i5", nucleos: 6 }, teclado : false , raton: true},
    { nombre: "pc-14", ram: 8, procesador: { marca: "amd", modelo: "fx", nucleos: 4 }, teclado : true , raton: true},
    { nombre: "pc-15", ram: 6, procesador: { marca: "intel", modelo: "i3", nucleos: 2 }, teclado : true , raton: true}
 ]);