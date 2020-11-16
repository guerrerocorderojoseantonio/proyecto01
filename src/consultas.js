//Equipos con intel
db.ordenadores.find({"procesador.marca" : "intel"})
//Equipos con teclado
db.ordenadores.find({teclado:true})
//Equipos que empiecen por pc-1X
db.ordenadores.find({nombre: {$regex : /^pc-1/ }})
//Equipos con más de 8GB de ram y más de 2 núcleos
db.ordenadores.find({ram:{$gt:8},"procesador.nucleos":{$gt:2}})
//Equipos con un i3 sin teclado
db.ordenadores.find({"procesador.modelo":"i3", teclado:false})
//Equipos con ram menor a 8GB
db.ordenadores.find({ram:{$lt:8}})
//Equipos que no sean ni i3 ni ryzen3
db.ordenadores.find({"procesador.modelo":{$nin:["i3", "ryzen3" ]}})
//Equipos intel que no sean de la familia i-x
db.ordenadores.find({"procesador.marca": "intel", "procesador.modelo": { $not: /^i/ }})
//Equipos con menos o ram igual a 8 y los de 16
db.ordenadores.find({ $or:[{ram:{$lte:8}}, {ram:{$eq:12}}]})
//Equipos con un procesador i5 o i3
db.ordenadores.find( { "procesador.modelo": { $in: [ "i5", "i3" ] } } )
//Equipos con un nombre diferente al resto
db.ordenadores.find({ nombre: {$not : /^pc-[0-9]/ }})