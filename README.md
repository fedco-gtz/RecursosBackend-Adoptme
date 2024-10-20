![Coderhouse](./src/public/images/readme/Coder.png)
# Programación Backend III: Testing y Escalabilidad Backend - Comisión 70000
Profesor: Samuel Tocaimaza

Tutor: Allan Reynoso Naranjo

## Proyecto Final `Adoptme` (PreEntrega1-Gutierrez)
Estudiante: Federico Gutierrez

![Portada](./src/public/images/readme/Portada.png)


### INTRODUCCIÓN

Allan:

¡Qué alegría coincidir nuevamente en esta etapa de entregas! Te cuento que he estado trabajando en el proyecto "Adoptme" que me ha permitido profundizar en la creación y organización de rutas dentro de un proyecto Node.js, lo cual ha mejorado notablemente la gestión de los datos y el flujo del desarrollo. Te comparto algunos de los aspectos más relevantes de esta nueva implementación:

1. Creación del router mocks.router.js: He diseñado un nuevo router bajo la ruta base /api/mocks y he movido el endpoint /mockingpets (desarrollado previamente) dentro de este router para una mejor estructura y organización del código.

2. Módulo de Mocking para usuarios: Implementé un módulo que genera usuarios de acuerdo a un parámetro numérico, asegurando que cada usuario tenga las siguientes características:

- La contraseña encriptada como "coder123".
- El rol que puede variar entre "user" y "admin".
- Un array vacío para "pets".
- Endpoint para generar usuarios: Dentro del router mocks.router.js, creé un endpoint GET llamado /mockingusers que utiliza el módulo de Mocking para generar 50 usuarios con un formato que imita una respuesta de MongoDB.
- Endpoint para generación de datos: También añadí un endpoint POST llamado /generateData, que acepta parámetros numéricos para "users" y "pets", generando e insertando en la base de datos la cantidad especificada de registros. Posteriormente, se pueden verificar estos registros mediante los servicios GET de "users" y "pets".

Estas mejoras han contribuido significativamente a estructurar de manera más eficiente el flujo de generación y manejo de datos dentro del proyecto, optimizando tanto la organización del código como la interacción con la base de datos.

### 1. CÓDIGO DESARROLLADO

* Ingresa a [Google Drive](https://drive.google.com/drive/folders/1OFBGDCzPoIFy5d0NUCIQpxpRbo05hhIl?usp=sharing). 


### 2. LINK REPOSITORIO GITHUB

* Ingresa a [Github](https://github.com/fedco-gtz/RecursosBackend-Adoptme). 


### REDES SOCIALES

¡Seguime en mis redes sociales para conocer todos mis proyectos!

[<img src="./src/public/images/readme/Facebook.png" alt="Facebook Logo" width="30" height="30">](https://www.facebook.com/federico.g.gutierrez2)
&nbsp;&nbsp;&nbsp;
[<img src="./src/public/images/readme/Instagram.png" alt="Instagram Logo" width="30" height="30">](https://www.instagram.com/grrz.fede/)
&nbsp;&nbsp;&nbsp;
[<img src="./src/public/images/readme/LinkedIn.png" alt="LinkedIn Logo" width="30" height="30">](https://www.linkedin.com/in/fedco-grrz/)
&nbsp;&nbsp;&nbsp;
[<img src="./src/public/images/readme/Github.png" alt="Github Logo" width="30" height="30">](https://github.com/fedco-gtz)

### PROYECTOS PERSONALES
[Desarrollo Web](https://mascotas-felices.netlify.app/)&nbsp;&nbsp;|&nbsp;&nbsp;
[JavaScript](https://vuelasmart.netlify.app/)&nbsp;&nbsp;|&nbsp;&nbsp;
[React Js](https://zapatienda.vercel.app/)&nbsp;&nbsp;|&nbsp;&nbsp;

______________________________________________________________________________________________________
### `ÚLTIMA ACTUALIZACIÓN DEL PROYECTO 18/10/2024`

### `ENTREGA DE PRIMERA PRE-ENTREGA 17/10/2024` [DEVOLUCIÓN]()
### `ENTREGA DEL PROYECTO FINAL xx/xx/xxxx` [DEVOLUCIÓN]() 