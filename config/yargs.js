


const argv = require('yargs')
            .command('crear','crear un elemento por hacer', {

                descripcion: {

                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer '
                }
            })
            .command('actualizar', 'Actualiza el estado completado de una tarea',{
                descripcion: {

                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer '
                },
                completado: {
                   default: true,
                   alias: 'c',
                desc: 'maraca como completado o pendiente la tarea'

                }
                
            })
            .command('borrar', 'Actualiza el estado completado de una tarea',{
                descripcion: {

                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer '
                }
                
                
            })

            .help()
            .argv;

            

            module.exports = {

                argv
            }