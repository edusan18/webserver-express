const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers'); // Con esto llamamos a los helpers

const port = process.env.port || 3000; // Conseguimos el puerto del entorno, esto para tomar el puerto del servidor que se nos ha 
// brindado, en caso no exista tal entorno, tomará el puerto 3000
 
app.use(express.static(__dirname + '/public')); // creando el middleware, con esto mostrará la pagina web
// , todo el contenido de esta carpeta será de dominio publico

hbs.registerPartials(__dirname + '/views/parciales');


// Express HBS engine
app.set('view engine', 'hbs');


//Un helper no es mas que una funcion que se dispara cuando el template lo requiere
/* //Para no tener todos los helpers metidos aqui lo llevamos a un archivo
hbs.registerHelper('getAnio',() =>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar',(texto) =>{
    
    let palabras = texto.split(' ');
    palabras.forEach((palabra,idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
*/




app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'EduaRdo correa'

    }) // con el segundo parametro mandamos las variables necesarias en la vista
    

  })

app.get('/about', function (req, res) {
  res.render('about',{
    ruta:  '/assets/img/prueba.jpg'
})

}) // con el segundo parametro mandamos las variables necesarias en la vista

 
//app.listen(3000) // puerto

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`); // tambien acepta callbacks
}) // Este console.log se ve el cmd al momento de levantar el programa