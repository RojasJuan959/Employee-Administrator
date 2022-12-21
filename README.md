# Employee-Administrator

Para ejecutar el proyecto siga las siguientes instrucciones por favor:

1.	Clone el repositorio
-	Situados en la página de GitHub del repositorio del proyecto, buscar el botón verde de código y darle clic. Abrirá una pequeña ventana con un vínculo que copiaras para clonar el proyecto.

2.	Para el siguiente paso es necesario que instales Git Bash, luego, situados en la carpeta deseada a descargar el proyecto, clic derecho y clic en la opción de Git Bash Here.

3.	Se abrirá una pantalla pequeña, vas a digitar: git clone <url copiado>
-	La sección de <url copiado> pegar la url que copiamos en los pasos anteriores
-	Luego presionar enter y el proyecto comenzara a descargarse en la carpeta

4.	Al descargar el proyecto, lo abriremos en un editor de código a conveniencia, para este caso, se utilizará Visual Studio Code.
-	Abrirás el proyecto en la carpeta raíz 

5.	Visual Studio nos permite abrir una terminal, abrirla desde el menú superior en la sección “Terminal” -> “New Terminal”.

6.	El anterior paso abrirá una pequeña ventana en la parte inferior de la pantalla.

7.	En la consola, vas a ejecutar el siguiente comando: npm i
-	Al presionar enter, comenzará a descargar las dependencias y paquetes del proyecto

8.	Al finalizar la descarga, ejecuta el siguiente comando: npm start
-	Al presionar enter, se abrirá una ventana en tu navegador con el proyecto

9.	Inicia sesión como administrador con:
-	Username: Admin
-	Password: Admin
-	Clic en Login

10.	El anterior paso te enviará al home del proyecto, donde podrás visualizar la información extraída de una base de datos de Firebase, datos como las localidades de las sedes de la compañía y la información de los empleados en códigos QR.

11.	Los códigos QR te darán los datos de los empleados, visualízalos desde tu celular o en un navegador.

12.	Si le das clic al botón de “More” en la sección de localidades, te enviará a la información correspondiente de cada localidad, mostrando su ubicación, nombre y empleados ingresados.

13.	Para ingresar a los empleados a alguna localidad debes de dirigirte al Home del proyecto, Desde allí, en la sección de cada empleado, podrás desplegar una entrada que te mostrara el nombre de las localidades, la seleccionas y le presionas en el botón “Get into”.
-	Esta acción tiene varias validaciones, si el empleado ya se encuentra en otra localidad, el sistema te avisará que el empleado ya este asignado a un puesto de trabajo y no lo podrás mover hasta que le termines el turno.
-	Al asignar el empleado a alguna sede, en la sección de cada localidad aparecerá un icono de usuario para notificarte que en esa sede se encuentra un empleado por lo menos.

14.	Si vuelves a visualizar la localidad, te mostrará el código QR del empleado situado en ella

15.	Si vuelves a escanear el código QR, te mostrará la información del empleado y su ubicación estará actualiza según la localidad en la que se encuentre.

16.	Si deseamos “Liberar” a cualquier empleado de alguna sede, solamente le das clic en el botón de “Sign out”, de esta forma el empleado estará disponible para ubicarlo en otra localidad.
