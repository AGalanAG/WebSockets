<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles.css">

    <title>Basic Chat</title>
</head>

<body>
    <h1>Sala de Chat</h1>
    <div class="contenedor">

        <div>
            <?php
            echo "Identificate y comunica tu mensaje!";
            ?>
        </div>

        <div><input type="text" id="Username" placeholder="Nombre de ususario"></div>

        <div><input type="text" id="Message" placeholder="Mensaje"></div>

        <div><button id="Send">Enviar</button></div>

        <div class="BoxMessages" id="Show"></div>

    </div>
</body>

<script src="socket.io.js"> </script>
<script src="socket.js"> </script>

</html>