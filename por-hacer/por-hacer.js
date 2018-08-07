

const fs = require ('fs');


//almacenare todo en un arreglo, me va permitir mostrar listados, y trabajar con las notas de modo inidependiente

let listadoPorHacer= [];//inicializao como arreglo vacio
const guardarDB = () => {//no recibe parametro trabajare on el listado porHacer, esto sera para almacentar como json. 

 let data  = JSON.stringify(listadoPorHacer);  //aqui ya tendre la data en formato json, sera igual al objeto listadoPorHacer pero en JSON, convierte un objeto a un JSON valido  

//esto lo voy a grabar en el fileSystem.
fs.writeFile('db/data.json', data, (err) => { //uso el metodo writefile con sus dos parametros uno es la ruta otro el archivo y el error 
      if (err) throw new Error ('no se pudo grabaar', err);

    });
}

const cargarDB = () => {

   listadoPorHacer = require('../db/data.json');//al detectar que es JSON lo serializa y lo convierte en javascript por nosotortos
    
}
//primera funcion

const crear = (descripcion) => {

    
  //creo un objeto
    let porHacer = {

        descripcion, 
        completado: false

         
    };
    cargarDB();
//hago push de esto objeto dentro del listado por hace r
try {

     listadoPorHacer.push(porHacer);
}catch (error){

    listadoPorHacer = [];
}
   

    guardarDB();//aqui ejecuto la funcion ya que acabo de hacer el push , agregar a la lista  o base 

    return porHacer;//para tener retroalimentacion d elo que se acaba de crear 
}



const getListado = () => {
  cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();//ya tengo cargado el arreglo en el listado por hacer 
    let index =  listadoPorHacer.findIndex(tarea =>  tarea.descripcion === descripcion);//que me de el index o la posicion de la tarea que coincida. sino coincide me dara un -1 
    //buscar en el arreglo lo que coincida con la descripcion que me envia el usuario 
   if (index >= 0){
     listadoPorHacer[index].completado = completado;
     guardarDB();
     return true;
   } else {
       return false; 
            }

   }

    const borrar = (descripcion) =>{
cargarDB(); //primero cargo la base de datos sino no voy a saber que tengo que borrar 

let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);//regreso lo elementos que no coincidan con esta condicion ); //me permite quitar o filtrar algun registro y retornarme un arreglo 

if (listadoPorHacer.length === nuevoListado.length){

     return false;
}else {

    listadoPorHacer = nuevoListado;//la base de datos guarda listado por hacer  por eso lo igual a nuevo listado para que guarde eso 
    guardarDB();
    return true;

}

    }
module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}