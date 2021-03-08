db.competiciones.drop()
db.competiciones.insertMany([
    {
        id_competicion: 01,
        nombre_competicion: "24 Horas de Le Mans",
    },
    { id_competicion: 02, nombre_competicion: "Formula E" },
    { id_competicion: 03, nombre_competicion: "WTCR" },
    { id_competicion: 04, nombre_competicion: "WRC" },
    { id_competicion: 05, nombre_competicion: "F1" }
])


db.marcas.drop()
db.marcas.insertMany([
    {
        id_marca: 01,
        nombre_marca: "Audi",
        fecha_fundacion: ISODate("1932-06-29"),
        pais: "Alemania",
        id_competicion: [01, 02, 03, 04],
        competiciones_ganadas: { "24 Horas de Le Mans": 13, "Formula E": 1, "WTCR": 1, "WRC": 2 }
    },
    { id_marca: 02, nombre_marca: "Volkswagen", fecha_fundacion: ISODate("1937-05-28"), pais: "Alemania", id_competicion: [04], competiciones_ganadas: { "WRC": 5 } },
    { id_marca: 03, nombre_marca: "Seat", fecha_fundacion: ISODate("1950-06-29"), pais: "España", id_competicion: [03], competiciones_ganadas: { "WTCR": 2 } },
    { id_marca: 04, nombre_marca: "BMW", fecha_fundacion: ISODate("1916-03-07"), pais: "Alemania", id_competicion: [01, 05, 03], competiciones_ganadas: { "24 Horas de Le Mans": 1, "F1": 2, "WTCR": 4 } },
    { id_marca: 05, nombre_marca: "Mercedes Benz", fecha_fundacion: ISODate("1926-01-01"), pais: "Alemania", id_competicion: [01, 05], competiciones_ganadas: { "24 Horas de Le Mans": 1, "F1": 13 } },
    { id_marca: 06, nombre_marca: "Jeep", fecha_fundacion: ISODate("1925-06-06"), pais: "EEUU" },
    { id_marca: 07, nombre_marca: "Fiat", fecha_fundacion: ISODate("1899-06-11"), pais: "Italia", id_competicion: [04], competiciones_ganadas: { "WRC": 2 } },
    { id_marca: 08, nombre_marca: "Ford", fecha_fundacion: ISODate("1903-06-16"), pais: "EEUU", id_competicion: [01, 05, 03, 04], competiciones_ganadas: { "24 Horas de Le Mans": 4, "F1": 1, "WTCR": 1, "WRC": 3 } },
    { id_marca: 09, nombre_marca: "Peugeot", fecha_fundacion: ISODate("1932-06-29"), pais: "Francia", id_competicion: [01, 04], competiciones_ganadas: { "24 Horas de Le Mans": 3, "WRC": 4 } },
    { id_marca: 10, nombre_marca: "Tesla", fecha_fundacion: ISODate("2003-07-01"), pais: "EEUU" },
    { id_marca: 11, nombre_marca: "Nissan", fecha_fundacion: ISODate("1933-12-26"), pais: "Japón" },
    { id_marca: 12, nombre_marca: "Ferrari", fecha_fundacion: ISODate("1947-01-01"), pais: "Italia", id_competicion: [01, 05], competiciones_ganadas: { "24 Horas de Le Mans": 9, "F1": 15 } },
    { id_marca: 13, nombre_marca: "Citroën", fecha_fundacion: ISODate("1919-03-01"), pais: "Francia", id_competicion: [03, 04], competiciones_ganadas: { "WTCR": 3, "WRC": 9 } },
    { id_marca: 14, nombre_marca: "Renault", fecha_fundacion: ISODate("1898-10-01"), pais: "Francia", id_competicion: [01, 05, 02], competiciones_ganadas: { "24 Horas de Le Mans": 1, "F1": 11, "Formula E": 3 } },
    { id_marca: 15, nombre_marca: "Porsche", fecha_fundacion: ISODate("1931-04-25"), pais: "Alemania", id_competicion: [01, 05], competiciones_ganadas: { "24 Horas de Le Mans": 19, "F1": 3 } },
    { id_marca: 16, nombre_marca: "Toyota", fecha_fundacion: ISODate("1937-08-28"), pais: "Japón", id_competicion: [01, 04], competiciones_ganadas: { "24 Horas de Le Mans": 3, "WRC": 5 } },
    { id_marca: 17, nombre_marca: "Bugatti", fecha_fundacion: ISODate("1998-12-22"), pais: "Francia", id_competicion: [01], competiciones_ganadas: { "24 Horas de Le Mans": 2 } }
])


db.categorias.drop()
db.categorias.insertMany([
    {
        id_categoria: 01,
        nombre_categoria: "SUV"
    },
    { id_categoria: 02, nombre_categoria: "Compacto" },
    { id_categoria: 03, nombre_categoria: "Familiar" },
    { id_categoria: 04, nombre_categoria: "Sedán" },
    { id_categoria: 05, nombre_categoria: "Todoterreno" },
    { id_categoria: 06, nombre_categoria: "Descapotable" },
    { id_categoria: 07, nombre_categoria: "Coupé" },
    { id_categoria: 08, nombre_categoria: "Superdeportivo" }
])


db.coches.drop()
db.coches.insertMany([
    {
        id_coche: 01,
        id_marca: 01,
        id_categoria: [04],
        nombre_coche: "A4 Avant S Line",
        precio: 41022,
        fecha_estreno: ISODate("2008-01-25"),
        especificaciones:{Cilindros: 4,
                            HP:144,
                            Traccion: "Total",
                            Asientos: 5,
                            Puertas: 5,
                            Color: "Rojo Torino"
                        },
        tipo_motor: {coche_electrico: false, coche_hibrido: false}
    },
    { id_coche: 02, id_marca: 03, id_categoria: [01, 05], nombre_coche: "Tarraco Excelence +", precio: 33650, fecha_estreno: ISODate("2018-07-25"), especificaciones: {Cilindros: 4, HP: 150, Asientos: 7, Puertas: 5, Color: "Gris Plata"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 03, id_marca: 10, id_categoria: [04, 08], nombre_coche: "Model S", precio: 90970, fecha_estreno: ISODate("2015-01-14"), especificaciones: {Cilindros: 0, HP: 714, Asientos: 5, Puertas: 5, Color: "Azul Prusia"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 04, id_marca: 09, id_categoria: [01, 03], nombre_coche: "3008", precio: 30242, fecha_estreno: ISODate("2019-11-03"), especificaciones: {Cilindros: 4, HP: 105, Asientos: 5, Puertas: 5, Color: "Cobre"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 05, id_marca: 08, id_categoria: [02, 08], nombre_coche: "Focus RS", precio: 35760, fecha_estreno: ISODate("2018-10-13"), especificaciones: {Cilindros: 8, HP: 314, Asientos: 2, Puertas: 3, Color: "Verde fluorescente"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 07, id_marca: 01, id_categoria: [02, 04], nombre_coche: "A3", precio: 28862, fecha_estreno: ISODate("2020-09-09"), especificaciones: {Cilindros: 4, HP: 124, Asientos: 5, Puertas: 5, Color: "Negro"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 08, id_marca: 07, id_categoria: [03], nombre_coche: "Multipla", precio: 19910, fecha_estreno: ISODate("1998-11-01"), especificaciones: {Cilindros: 3, HP: 89, Asientos: 5, Puertas: 5, Color: "Amarillo apagado"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 09, id_marca: 02, id_categoria: [02], nombre_coche: "Golf MK8", precio: 28385, fecha_estreno: ISODate("2021-01-07"), especificaciones: {Cilindros: 6, HP: 149, Asientos: 5, Puertas: 5, Color: "Blanco"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 10, id_marca: 05, id_categoria: [03, 04, 08], nombre_coche: "CLA Shooting Brake", precio: 46625, fecha_estreno: ISODate("2021-01-05"), especificaciones: {Cilindros: 6, HP: 349, Asientos: 5, Puertas: 5, Color: "Gris mate"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 11, id_marca: 04, id_categoria: [07, 08], nombre_coche: "M8 Gran Coupé First Edition", precio: 221900, fecha_estreno: ISODate("2020-12-29"), especificaciones: {Cilindros: 6, HP: 453, Asientos: 5, Puertas: 3, Color: "Verde oscuro"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 12, id_marca: 06, id_categoria: [05, 06], nombre_coche: "Wrangler", precio: 54923, fecha_estreno: ISODate("1994-03-21"), especificaciones: {Cilindros: 8, HP: 180, Asientos: 5, Puertas: 5, Color: "Cammo"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 13, id_marca: 03, id_categoria: [02], nombre_coche: "Leon", precio: 15871, fecha_estreno: ISODate("2020-04-26"), especificaciones: {Cilindros: 4, HP: 89, Asientos: 5, Puertas: 5, Color: "Rojo granate"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 14, id_marca: 03, id_categoria: [01], nombre_coche: "Arona", precio: 19680, fecha_estreno: ISODate("2019-01-17"), especificaciones: {Cilindros: 4, HP: 111, Asientos: 5, Puertas: 5, Color: "Negro"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 15, id_marca: 03, id_categoria: [01, 03], nombre_coche: "Ateca", precio: 24360, fecha_estreno: ISODate("2019-08-08"), especificaciones: {Cilindros: 4, HP: 125, Asientos: 5, Puertas: 5, Color: "Azul eléctrico"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 16, id_marca: 11, id_categoria: [07, 08], nombre_coche: "Nissan GTR Nismo", precio: 127290, fecha_estreno: ISODate("2011-07-03"), especificaciones: {Cilindros: 12, HP: 714, Asientos: 2, Puertas: 3, Color: "Amarillo de carreras"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 17, id_marca: 16, id_categoria: [07, 08], nombre_coche: "Supra", precio: 69900, fecha_estreno: ISODate("2009-03-11"), especificaciones: {Cilindros: 12, HP: 799, Asientos: 2, Puertas: 3, Color: "Gris"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 18, id_marca: 16, id_categoria: [04], nombre_coche: "Corolla", precio: 26050, fecha_estreno: ISODate("2004-02-03"), especificaciones: {Cilindros: 4, HP: 78, Asientos: 5, Puertas: 5, Color: "Blanco hielo"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 19, id_marca: 16, id_categoria: [04], nombre_coche: "Prius", precio: 37900, fecha_estreno: ISODate("2020-04-12"), especificaciones: {Cilindros: 3, HP: 98, Asientos: 5, Puertas: 5, Color: "Rojo pasión"}, tipo_motor: {coche_electrico: false, coche_hibrido: true}  },
    { id_coche: 20, id_marca: 02, id_categoria: [01], nombre_coche: "Tiguan", precio: 30704, fecha_estreno: ISODate("2019-09-29"), especificaciones: {Cilindros: 4, HP: 169, Asientos: 5, Puertas: 5, Color: "Blanco escarcha"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 21, id_marca: 11, id_categoria: [02], nombre_coche: "Leaf", precio: 35620, fecha_estreno: ISODate("2021-10-24"), especificaciones: {Cilindros: 0, HP: 190, Asientos: 5, Puertas: 5, Color: "Nacarado"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 22, id_marca: 04, id_categoria: [01, 03], nombre_coche: "i3", precio: 40700, fecha_estreno: ISODate("2013-11-11"), especificaciones: {Cilindros: 2, HP: 178, Asientos: 5, Puertas: 5, Color: "Verde oscuro"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 23, id_marca: 17, id_categoria: [08], nombre_coche: "Chiron", precio: 2400000, fecha_estreno: ISODate("2020-01-10"), especificaciones: {Cilindros: 16, HP: 1499, Asientos: 2, Puertas: 3, Color: "Azul Medianoche y Plata"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 24, id_marca: 02, id_categoria: [02], nombre_coche: "Polo", precio: 17665, fecha_estreno: ISODate("2019-09-29"), especificaciones: {Cilindros: 4, HP: 69, Asientos: 4, Puertas: 5, Color: "Dorado"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 25, id_marca: 06, id_categoria: [05, 08], nombre_coche: "Grand Cherokee", precio: 140000, fecha_estreno: ISODate("2019-06-29"), especificaciones: {Cilindros: 6, HP: 314, Asientos: 5, Puertas: 5, Color: "Cammo"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 26, id_marca: 07, id_categoria: [02], nombre_coche: "Punto", precio: 13850, fecha_estreno: ISODate("2002-04-26"), especificaciones:{Cilindros: 3, HP: 45, Asientos: 4, Puertas: 3, Color: "Rojo apagado"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 27, id_marca: 01, id_categoria: [06, 07, 08], nombre_coche: "R8 +", precio: 167496, fecha_estreno: ISODate("2008-03-27"), especificaciones: {Cilindros: 8, HP: 214, Asientos: 5, Puertas: 5, Color: "Verde lima"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 28, id_marca: 08, id_categoria: [08], nombre_coche: "Mustang GT", precio: 48533, fecha_estreno: ISODate("2017-01-05"), especificaciones: {Cilindros: 8, HP: 365, Asientos: 4, Puertas: 3, Color: "Rosa fucsia"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 29, id_marca: 14, id_categoria: [02], nombre_coche: "Clio", precio: 14910, fecha_estreno: ISODate("2015-12-15"), especificaciones: {Cilindros: 4, HP: 85, Asientos: 5, Puertas: 5, Color: "Blanco"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 30, id_marca: 13, id_categoria: [03, 04], nombre_coche: "C4 Cactus", precio: 22812, fecha_estreno: ISODate("2019-02-18"), especificaciones: {Cilindros: 4, HP: 120, Asientos: 5, Puertas: 5, Color: "Verde cactus"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 31, id_marca: 13, id_categoria: [03, 04], nombre_coche: "C5", precio: 27275, fecha_estreno: ISODate("2009-04-13"), especificaciones: {Cilindros: 4, HP: 150, Asientos: 5, Puertas: 5, Color: "Verde militar"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 32, id_marca: 15, id_categoria: [07, 08], nombre_coche: "911", precio: 122358, fecha_estreno: ISODate("2020-01-31"), especificaciones: {Cilindros: 6, HP: 456, Asientos: 2, Puertas: 3, Color: "Gris nacarado"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 33, id_marca: 12, id_categoria: [08], nombre_coche: "LaFerrari", precio: 1300000, fecha_estreno: ISODate("2020-09-11"), especificaciones: {Cilindros: 8, HP: 789, Asientos: 2, Puertas: 3, Color: "Rojo torino"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 34, id_marca: 12, id_categoria: [08], nombre_coche: "Enzo", precio: 2335000, fecha_estreno: ISODate("2020-11-11"), especificaciones: {Cilindros: 8, HP: 653, Asientos: 2, Puertas: 3, Color: "Amarillo de carreras"}, tipo_motor: {coche_electrico: false, coche_hibrido: true} },
    { id_coche: 35, id_marca: 04, id_categoria: [01, 08], nombre_coche: "M6", precio: 123200, fecha_estreno: ISODate("2016-10-11"), especificaciones: {Cilindros: 6, HP: 413, Asientos: 5, Puertas: 5, Color: "Azul agua"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 36, id_marca: 04, id_categoria: [07, 08], nombre_coche: "M3", precio: 111200, fecha_estreno: ISODate("2009-02-09"), especificaciones: {Cilindros: 6, HP: 398, Asientos: 5, Puertas: 5, Color: "Plata"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 37, id_marca: 03, id_categoria: [02], nombre_coche: "Ibiza", precio: 16360, fecha_estreno: ISODate("2021-03-20"), especificaciones: {Cilindros: 4, HP: 89, Asientos: 5, Puertas: 5, Color: "Verde pistacho"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 38, id_marca: 13, id_categoria: [03], nombre_coche: "Picasso", precio: 28850, fecha_estreno: ISODate("2005-09-11"), especificaciones: {Cilindros: 4, HP: 115, Asientos: 5, Puertas: 5, Color: "Marrón claro"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 39, id_marca: 14, id_categoria: [01, 02], nombre_coche: "Captur", precio: 20490, fecha_estreno: ISODate("2017-11-20"), especificaciones: {Cilindros: 3, HP: 81, Asientos: 5, Puertas: 5, Color: "Blanco y negro"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 40, id_marca: 14, id_categoria: [02, 07], nombre_coche: "Megane RS", precio: 31396, fecha_estreno: ISODate("2018-03-07"), especificaciones: {Cilindros: 5, HP: 198, Asientos: 4, Puertas: 3, Color: "Blanco y Amarillo"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 41, id_marca: 01, id_categoria: [01, 03], nombre_coche: "e-tron", precio: 75442, fecha_estreno: ISODate("2019-01-14"), especificaciones: {Cilindros: 0, HP: 345, Asientos: 5, Puertas: 5, Color: "Verde"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 42, id_marca: 05, id_categoria: [01, 03], nombre_coche: "EQC", precio: 77425, fecha_estreno: ISODate("2020-12-02"), especificaciones: {Cilindros: 0, HP: 401, Asientos: 7, Puertas: 5, Color: "Azul de carreras"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 43, id_marca: 09, id_categoria: [02], nombre_coche: "e-2008", precio: 36450, fecha_estreno: ISODate("2021-02-28"), especificaciones: {Cilindros: 0, HP: 190, Asientos: 5, Puertas: 5, Color: "Turquesa"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 44, id_marca: 15, id_categoria: [07, 08], nombre_coche: "Taycan", precio: 85710, fecha_estreno: ISODate("2020-11-10"), especificaciones: {Cilindros: 0, HP: 736, Asientos: 5, Puertas: 5, Color: "Rojo redstone"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 45, id_marca: 14, id_categoria: [02], nombre_coche: "Zoe", precio: 33500, fecha_estreno: ISODate("2014-12-31"), especificaciones: {Cilindros: 0, HP: 120, Asientos: 5, Puertas: 5, Color: "Ciruela"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 46, id_marca: 17, id_categoria: [08], nombre_coche: "Veyron Grand Sport Vitesse", precio: 1600000, fecha_estreno: ISODate("2005-08-05"), especificaciones: {Cilindros: 16, HP: 1200, Asientos: 2, Puertas: 3, Color: "Azul Claro y Blanco"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 47, id_marca: 10, id_categoria: [08], nombre_coche: "Roadster", precio: 182000, fecha_estreno: ISODate("2022-01-01"), especificaciones: {Cilindros: 0, HP: 1600, Asientos: 2, Puertas: 3, Color: "Rojo vino"}, tipo_motor: {coche_electrico: true, coche_hibrido: false} },
    { id_coche: 48, id_marca: 05, id_categoria: [04, 07], nombre_coche: "Maybach Clase S", precio: 146000, fecha_estreno: ISODate("2020-12-12"), especificaciones: {Cilindros: 8, HP: 540, Asientos: 4, Puertas: 5, Color: "Verde oscuro"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 49, id_marca: 08, id_categoria: [05, 08], nombre_coche: "Raptor F-150", precio: 50000, fecha_estreno: ISODate("2020-05-16"), especificaciones: {Cilindros: 8, HP: 830, Asientos: 5, Puertas: 4, Color: "Azul eléctrico"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} },
    { id_coche: 50, id_marca: 07, id_categoria: [06], nombre_coche: "124 Spider", precio: 22880, fecha_estreno: ISODate("2018-03-01"), especificaciones: {Cilindros: 4, HP: 99, Asientos: 2, Puertas: 3, Color: "Amarillo mostaza"}, tipo_motor: {coche_electrico: false, coche_hibrido: false} }
])