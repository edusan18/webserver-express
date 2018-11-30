const express = require('express');
const app = express();
 
app.use(express.static(__dirname + '/public')); // creando el middleware, con esto mostrará la pagina web
// , todo el contenido de esta carpeta será de dominio publico



/***
 // Tenemos que comentar el codigo siguiente, para que no haya conflictos con el index de la carpeta publica, 
 // ya que ambos tendran el mismo url


// Realizaremos una solicitud get cuando encontremos un '/'
app.get('/', function (req, res) {
  //res.send('Hola mundo')
    let salida = {
                    nombre: 'eduardo',
                    edad: 32,
                    url: req.url
                }

    res.send(salida);

})
*/


app.get('/data', function (req, res) {
    res.send('Hola Data')
    
  })
 
//app.listen(3000) // puerto

app.listen(3000,()=>{
    console.log('Escuchando peticiones en el puerto 3000'); // tambien acepta callbacks
}) // Este console.log se ve el cmd al momento de levantar el programa