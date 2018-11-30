const express = require('express');
const app = express();
 
app.use(express.static(__dirname + '/public')); // creando el middleware, con esto mostrará la pagina web
// , todo el contenido de esta carpeta será de dominio publico


// Express HBS engine
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Eduardo',
        anio: new Date().getFullYear()

    }) // con el segundo parametro mandamos las variables necesarias en la vista
    
  })
 
//app.listen(3000) // puerto

app.listen(3000,()=>{
    console.log('Escuchando peticiones en el puerto 3000'); // tambien acepta callbacks
}) // Este console.log se ve el cmd al momento de levantar el programa