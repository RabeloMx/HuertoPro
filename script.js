document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.querySelector('#subscribe-form input').value;
    
    // Aquí puedes agregar la lógica para procesar la suscripción (enviar a un servidor, almacenar en una base de datos, etc.)
    console.log(`Correo electrónico suscrito: ${email}`);
    
    // Puedes mostrar un mensaje de éxito o redirigir a una página de agradecimiento
    alert('¡Gracias por suscribirte!');
});
