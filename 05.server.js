const express = require('express');
const app = express();

var hbs = require('hbs');
 
app.use(express.static(__dirname + '/public')); // creando el middleware, con esto mostrará la pagina web
// , todo el contenido de esta carpeta será de dominio publico

hbs.registerPartials(__dirname + '/views/parciales');


// Express HBS engine
app.set('view engine', 'hbs');




app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Eduardo',
        anio: new Date().getFullYear()

    }) // con el segundo parametro mandamos las variables necesarias en la vista
    

  })

app.get('/about', function (req, res) {
  res.render('about',{
    anio: new Date().getFullYear(),
    ruta:  '/assets/img/prueba.jpg'
})

}) // con el segundo parametro mandamos las variables necesarias en la vista

 
//app.listen(3000) // puerto

app.listen(3000,()=>{
    console.log('Escuchando peticiones en el puerto 3000'); // tambien acepta callbacks
}) // Este console.log se ve el cmd al momento de levantar el programa