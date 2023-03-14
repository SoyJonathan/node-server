
const readline = require('readline').createInterface({
  input: process.stdin, 
  output: process.stdout, 
})

let listaTareas = [];

function agregarTarea(indicador, descripcion, estado) {
  let nuevaTarea = {
    indicador,
    descripcion,
    estado
  }

  listaTareas.push(nuevaTarea)
  console.log("Tarea añadida correctamente")
}

function eliminarTarea(indicador) {
  listaTareas = listaTareas.filter((tarea) => tarea.indicador != indicador)
  console.log("Tarea eliminada correctamente")
 }

function completarTarea(indicador) {
  listaTareas.map((tarea) => {
    if (tarea.indicador === indicador) {
      tarea.estado = true;
    }
    return tarea;
  })
  console.log("Tarea Completada")
}
function iniciarPrograma() {
  readline.question(`Escriba segun el caso:
        1: Añadir tarea
        2: Eliminar tarea
        3: Completar tarea
        salir: Finalizar progarama
====>`, (opcion) => {
    opcion = opcion.trim().toLowerCase();

      switch (opcion) {
      case '1':
         console.log('-- Añadir tarea --')
            readline.question('Coloque el indicador de la tarea: ', (indicador) => {
               readline.question('Coloque la descripcion de la tarea: ', (descripcion) => {
               agregarTarea(indicador, descripcion, false);
               console.log(listaTareas);
               iniciarPrograma();
               });
            });
      break;
      case '2':
          console.log('-- Eliminar tarea ')
             readline.question('Coloque el indicador de la tarea a eliminar: ', (indicador) => {
             eliminarTarea(indicador);
               console.log('Tarea eliminada correctamente');
               console.log(listaTareas);
             iniciarPrograma();
              });
      break;
      case '3':
           console.log('-- Completar tarea --')
             readline.question('Coloque el indicador de la tarea a completar: ', (indicador) => {
             completarTarea(indicador);
               console.log('Tarea completada correctamente');
               console.log(listaTareas);
             iniciarPrograma();
             });
      break
       case 'salir':
            readline.close()
      break;
      default:
      console.log('Opcion no valida')
      iniciarPrograma()
    }
  });
}

iniciarPrograma()
