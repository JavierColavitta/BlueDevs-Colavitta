//declarando variables de las entradas del formulario

let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

//guardado de formulario

const form = document.getElementById("formulario");

// creación de evento para escuchar al formulario

form.addEventListener("submit", (e) => {
    //detener recarga de la página
    e.preventDefault()

    sender(nombre.value,telefono.value,email.value,mensaje.value)

    form.reset()
})

//declaración de la función enviar
function sender (nombre, telefono, email, mensaje) {

    Email.send({
        SecureToken: "355d87bc-af46-42a3-99c3-ebe3cf6f4751", //token de seguridad de smtp.js
        To: "formulariodesarrollo@gmail.com", //email de destino del mensaje
        From: "formulariodesarrollo@gmail.com", //email de donde se va a enviar el mensaje y debe ser el mismo con el que generamos el token
        Subject: `${nombre} Te enviaron un mensaje desde la web Bluedevs`,
        Body: `
            <p>Nombre: ${nombre}</p>
            <p>Telefono: ${telefono}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${mensaje}</p>
        `
    })
    .then(
        message => swal("Tu mensaje ha sido enviado correctamente!", "En breve nos pondremos en contacto!", "success")
        //Se utilizó la libreria sweetAlert para generar ventanas emergentes tipo popup, se cargo el cdn en el index para mostrar funcionamiento
        //mas info en https://sweetalert.js.org/
    )
    .catch(
        error => swal("Error al enviar el mensaje!", "Vuelve a intentarlo más tarde!", "error")
        //en caso de error saldrá otro popup informando esto
    )
}