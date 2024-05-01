<?php
// Variables para almacenar los valores del formulario
$nombre = $email = $telefono = $mensaje = "";
// Variable para almacenar el mensaje de confirmación
$confirmacion = "";

// Si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario y limpiarlos
    $nombre = limpiar_entrada($_POST["nombre"]);
    $email = limpiar_entrada($_POST["email"]);
    $telefono = limpiar_entrada($_POST["telefono"]);
    $mensaje = limpiar_entrada($_POST["mensaje"]);

    // Aquí puedes agregar la lógica para procesar los datos del formulario, como enviarlos por correo electrónico o guardarlos en una base de datos

    // Mensaje de confirmación
    $confirmacion = "¡Gracias por enviar el formulario!";
}

// Función para limpiar los datos de entrada
function limpiar_entrada($dato) {
    $dato = trim($dato);
    $dato = stripslashes($dato);
    $dato = htmlspecialchars($dato);
    return $dato;
}
?>

<h2>Formulario de Contacto</h2>
<p>Rellena el siguiente formulario para contactarnos:</p>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="nombre">Nombre:</label><br>
    <input type="text" id="nombre" name="nombre" value="<?php echo $nombre; ?>"><br>

    <label for="email">Correo electrónico:</label><br>
    <input type="email" id="email" name="email" value="<?php echo $email; ?>"><br>

    <label for="telefono">Teléfono:</label><br>
    <input type="tel" id="telefono" name="telefono" value="<?php echo $telefono; ?>"><br>

    <label for="mensaje">Mensaje:</label><br>
    <textarea id="mensaje" name="mensaje"><?php echo $mensaje; ?></textarea><br>

    <input type="submit" value="Enviar">
</form>

<?php echo $confirmacion; ?>