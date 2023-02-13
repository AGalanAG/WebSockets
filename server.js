//Archivo para realizar la configuracion del servidor

const express = require('express'); //utilizando el modulo de node js "express"
const app = express();
const http = require('http').createServer(app); //utilizando el modulo de node js "http"
const io = require('socket.io')(http); //utilizando socket io
const port = process.env.PORT || 3000; // variable para configurar el puerto

app.get('/',(req,res,next)=>{ 
    res.send('Hola mundo');
});

//Funciones para la conexion del websocket
io.on('connection',(socketIO)=>{
    console.log("New conection");
//Receptor del mensaje
    socketIO.on('SendMessage',(data)=>{
      console.log(data);
//Emision del mensaje
    io.emit('SendMessage',data);
    });

    

    
});

//Asignacion del pueto al servidor
http.listen(port,()=>{
console.log('Puerto: '+port);
});
