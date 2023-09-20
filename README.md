# ExParcial Open Source 2023-01

Página 2 de 5
Enunciado:
Pregunta 1 (20 p.).
Caso TechnoGym, inc.
Su cliente, TechnoGym, inc. (https://www.technogym.com/) fue fundada en 1983 por Nerio
Alessandri, a la edad de 22 años. Desde esa época la empresa ha venido creciendo y adquiriendo
mayor prestigio, cosechando grandes logros empresariales, como convertirse en el Official Supplier
para entrenamiento atlético en las Olimpiadas de Sidney en el 2000, donde más de 2000 atletas
utilizaron equipos Technogyms.


Para ello ofrece un website donde los developers pueden registrarse para obtener acceso al mywellness cloud API o al Unity SDK (el SDK permite crear aplicaciones para los equipos de ejercicio con display, como los Treadmills, Bikes o Ellipticals).


El proyecto de Indoor Marathon contempla la implementación de 6 centros de competición
ubicados cada uno en una ciudad (Los Angeles, New York, Sidney, Montreal, París y Madrid).

Estará enlazada con las tres pantallas gigantes para la presentación del ranking local de participantes en tiempo real y gráficos analíticos de desempeño. La información de ranking de los 7 ganadores (7 mejores records) de cada Indoor Marathon Center, será enviada por la Edge Application hacia una base de datos Cloud FireStore de Google, la cual servirá de fuente de datos para el Website Oficial del concurso, elaborado con Angular y publicado en Firebase Hosting, donde se publicarán los rankings generales a nivel de todos los Marathon Centers.


Para ello, su equipo se encuentra desarrollando para TechnoGym, una plataforma de backend para presentar a ganadores y records del Indoor Marathon, sin embargo, desea ir iniciando con el
desarrollo del website de presentación de resultados. La evaluación tiene un empaquetado adjunto conteniendo dos archivos: db.json y routes.json, los cuales pueden ser usados por json-server (https://www.npmjs.com/package/json-server) para simular un backend con las características indicadas.

Al ejecutar json-server en el terminal, utilizando los archivos de configuración mencionados (debe ubicar los archivos en la carpeta server de su proyecto), con los comandos: 
cd server
json-server --watch db.json --routes routes.json

Esto inicia el Fake API.

La información de los Participants en general (id, firstName, lastName, photoUrl, centerId, ranking, recordTime) se encuentra en el endpoint:
http://localhost:3000/api/v1/participants

La información de los Marathon Centers (id, name) se encuentra en el endpoint:
http://localhost:3000/api/v1/centers

La información de los Participants con mejores tiempos en un Marathon Center específico se puede
encontrar en el endpoint:
http://localhost:3000/api/v1/centers/:centerId/participants

Para el desarrollo web de lado web frontend, se ha seleccionado TypeScript como lenguaje de programación y Angular como Frontend Framework.
Se le encarga el desarrollo de una aplicación web que implemente las siguientes características:

• Un toolbar, donde a la izquierda se muestra el branding Technogym Indoor Marathon y a la derecha se muestra las opciones “Home” y “Records”.
• La vista Home muestra un card con título “Marathon Winner”, incluyendo photo (la ruta de la imagen para cada participant está disponible en photoUrl), first name, last name, record time (en formato hh:mm:ss), marathon center name, para el participant con mejor tiempo de entre todos los Marathon Centers (el cual tiene valor de ranking 1).
• La vista Records presenta una vista de tabla de solo lectura (es decir que no se requiere soporte de adición, modificación o eliminación de registros) con la información de los participantes con mejor record time en cada Marathon Center. En cada fila debe apreciarse el participant id, first name, last name, marathon center name, ranking y record time (en 1 Para efectos de la evaluación, de requerirse tome como referencia la información técnica en el manual del equipo Technogym MyRun.

Debe presentarse solo una tabla con toda la información solicitada, no una tabla por cada center. La tabla debe ofrecer pagination, sorting y filtering.

• Considere una vista de tipo page-not-found para el caso de rutas de navegación no soportadas. Dicha vista debe mostrar un mensaje incluyendo la ruta especificada que no se encontró y debe ofrecer un botón para retornar a Home.
• La vista Home es accesible desde la ruta de navegación /home.
• La vista Records es accesible desde la ruta de navegación /marathon/records.
• La vista raíz (accesible desde la ruta de navegación /) debe redirigir al usuario a la vista /home.

El equipo de IT de su cliente tomará en cuenta no sólo el cumplimiento de las características funcionales, sino el diseño de interfaz de usuario, así como la estructura del proyecto, aplicación de convenciones de nomenclatura de objetos de programación en inglés, convenciones de nomenclatura de Angular, organización y eficiencia del código. Igualmente se tomará en cuenta laaplicación de patrones de diseño. Se toma en cuenta accessibility (uso de ARIA attributes) y usability.

Restricciones técnicas:
Nombre su proyecto como upc2301si729eaucode donde code es su código de estudiante en minúsculas.
El equipo requiere que la interfaz de usuario esté basada en Angular Material, mientras que para la comunicación con el backend debe apoyarse en HttpClient (incluido en @angular/common/http). La aplicación debe soportar in-app navigation y utilizar @angular/router para el manejo de routing en la aplicación. Debe incluir ARIA atributes en las vistas. La interfaz de usuario debe mostrar los textos en inglés. El proyecto de aplicación debe poder aperturarse sin problemas en JetBrains WebStorm.

La organización del proyecto debe ser domain-driven, considerando los sub-dominios public (para elementos o componentes generales de la interfaz de usuario, como home), shared (para elementos base o de uso común en otros sub-dominios) y marathon (para componentes o elementos relacionados con el marathon, como participants o centers). Aplique buenas prácticas para nomenclatura lógica y física de clases y componentes. Distribuya adecuadamente los elementos dentro de cada carpeta de sub-dominio, considerando carpetas como pages, components, services, model. En pages solo se ubican componentes que tienen relación directa con rutas de navegación. 

En components se ubican componentes que son incluidos en otros y no están asociados de forma directa a rutas de navegación
