/* Me haga un resumen de las competiciones que han ganado todas las marcas,
detalladas con el nombre y las veces que las han ganado. */
db.marcas.aggregate([
    {
        $addFields: { obj: { k: "$nombre_marca", v: "$competiciones_ganadas" } }
    },
    {
        $group: { _id: "$id_marca", datos: { $push: "$obj" } }
    },
    {
        $project: {
            array_marcas_y_competiciones:{
                $concatArrays:[
                    [ { "k":"_id", "v":"$_id" } ],
                    "$datos"
                ]
            }
        }
    },
    {
        $replaceWith: { $arrayToObject:"$array_marcas_y_competiciones" }
    },
    {
        $sort: { _id:1 }
    }
])
db.marcas.aggregate([
    {
        $project:{
            _id:0,
            id_marca:1,
            nombre_marca:1,
            competiciones_ganadas:1,
        }
    }
])


/* Me muestre, de todos aquellos coches cuyo precio sea superior a 85.000€, sean eléctricos y tengan más de 4 asientos
y tenga 5 puertas, su id, el nombre, los años que tiene, su precio, características de la marca, y sus especificaciones.
Estos coches tienen que haber sido fabricados a partir del año 2013. */
db.coches.aggregate([
    {
        $lookup:{
            from: "marcas",
            localField: "id_marca",
            foreignField: "id_marca",
            as: "coches_y_sus_marcas"
        }
    },
    {
        $match:{
            $and:[
                 { $expr: { $gte: [ "$precio", 85000 ] } },
                 { "tipo_motor.coche_electrico": true },
                 { "especificaciones.Asientos": { $gt: 4 } },
                 { "especificaciones.Puertas": { $eq: 5 } },
                 { $expr: { $gte: [ { $year: "$fecha_estreno" }, 2013 ] } }
            ]
        }
    },
    {
        $project:{
            "_id":0,
            "id_coche":1,
            "nombre_coche":1,
            "años coche": {
                $subtract:[
                    2021,
                    { $year:"$fecha_estreno" }
                ]
            },
            "precio":1,
            "coches_y_sus_marcas.id_marca":1,
            "coches_y_sus_marcas.nombre_marca":1,
            "especificaciones":1
        }
    }
]).pretty()


/* Me calcule el precio con IVA y me muestre los datos de todos aquellos coches que no son ni híbridos ni eléctricos,
no cuesten más de 55420€, tenga un motor de 4 cilindros o más y una fuerza igual o superior a 90 CV, todos ellos
fabricados a partir del 2005. Hay que tener en cuenta que todos aquellos coches cuyo precio con IVA sea mayor de
25000€ no tendrán derecho a subvención. También, según la potencia del motor, la DGT le dará una etiqueta medioambiental. */
db.coches.aggregate([
    {
        $lookup:{
            from: "marcas",
            localField: "id_marca",
            foreignField: "id_marca",
            as: "marcas_coche"
        }
    },
    {
        $lookup:{
            from: "categorias",
            localField: "id_categoria",
            foreignField: "id_categoria",
            as: "categoria"
        }
    },
    {
        $match:{
            $and:[
                 { "especificaciones.Cilindros": { $gte: 4 } },
                 { "especificaciones.HP": { $gte: 90 } },
                 { "tipo_motor.coche_hibrido": false },
                 { "tipo_motor.coche_electrico": false },
                 { $expr: { $lte: [ "$precio", 55420 ] } },
                 { $expr: { $gte: [ { $year: "$fecha_estreno" }, 2005 ] } } 
            ]
        }
    },
    {
        $project:{
            "_id": 0,
            "id_coche": 1,
            "nombre_coche": 1,
            "fecha_estreno": 1,
            "precio_sin_IVA": "$precio",
            "precio_con_IVA": { 
                $multiply: [
                    "$precio", 1.21
                ] },
            "marcas_coche.id_marca": 1,
            "marcas_coche.nombre_marca": 1,
            "especificaciones": 1,
            "categoria.nombre_categoria": 1,
            "subvención": {
                $cond: [
                    {$gte: ["$precio", 25000]}, "no apto", "apto"]
                },
            "etiqueta_medioambiental":{
                $switch:{
                    branches:[
                        {
                            case: { $lt: ["$especificaciones.HP", 100] },
                            then: "Etiqueta C: Verde (Bajas emisiones)" 
                        },
                        {
                            case: { 
                                $and: [{ $gte: ["$especificaciones.HP", 100] },
                                { $lt: ["$especificaciones.HP", 220] }]
                             },
                            then: "Etiqueta B: Amarillo (Emisiones moderadas)"
                        },
                        {
                            case: { $gte: ["$especificaciones.HP", 220] },
                            then: "Etiqueta A: Rojo (Altas emisiones)"
                        }
                    ],
                    default: "No se han especificado suficientes datos."
                }
            }
        }
    }
]).pretty()