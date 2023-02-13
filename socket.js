//Archivo para configurar la parte del cliente

//Configuracion de la conexion por parte del cliente
const socketIO = io("http://localhost:3000",{ //asignar el dominio
    secure:true,
    transports:['websocket','polling'] 
});

//Obtener datos del html
let msj = document.getElementById('Message');
let user = document.getElementById('Username');
let btn = document.getElementById('Send');
let box = document.getElementById('Show');



btn.addEventListener('click',()=>{
    //Enviar el mensaje al servidor
    socketIO.emit('SendMessage',{User:user.value,Message:msj.value});

    //console.log("Usuario: "+datos.User.value+" Mensaje: "+datos.Message.value);
});

//Recepcion de mensajes y mostrar en HTML
socketIO.on('SendMessage',(data)=>{
    box.innerHTML += `<p><strong> ${data.User}</strong>: ${data.Message}</p>`
});