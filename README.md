# ExParcial

Página 2 de 5
Enunciado:
Pregunta 1 (20 p.).
Caso TechnoGym, inc.
Su cliente, TechnoGym, inc. (https://www.technogym.com/) fue fundada en 1983 por Nerio
Alessandri, a la edad de 22 años. Desde esa época la empresa ha venido creciendo y adquiriendo
mayor prestigio, cosechando grandes logros empresariales, como convertirse en el Official Supplier
para entrenamiento atlético en las Olimpiadas de Sidney en el 2000, donde más de 2000 atletas
utilizaron equipos Technogyms. En el año 2012, se lanzó mywellness
(https://www.mywellness.com/), el primer cloud platform en el sector de fitness y wellness,
ofreciendo la posibilidad de acceder a programas personales desde cualquier lugar y en cualquier
momento, a la vez que se permite a los operadores conectarse con sus clientes utilizando web o
mobile systems, dentro o fuera del gimnasio. Para ello ofrece un website donde los developers
pueden registrarse para obtener acceso al mywellness cloud API o al Unity SDK (el SDK permite crear
aplicaciones para los equipos de ejercicio con display, como los Treadmills, Bikes o Ellipticals).
Como parte de su estrategia de negocio, ellos desean implementar el evento Indoor Marathon, una
competencia en la que pueden participar individuos o equipos, donde un porcentaje de los ingresos
se destinaría a causas benéficas.
El proyecto de Indoor Marathon contempla la implementación de 6 centros de competición
ubicados cada uno en una ciudad (Los Angeles, New York, Sidney, Montreal, París y Madrid). Cada
Indoor Marathon Center, contará con 42 Treadmills Technogym Run
(https://www.technogym.com/en-US/product/technogym-run_DGK0.html), tres pantallas gigantes
en alta definición en tres lados del ambiente donde se realizará la maratón. Los participantes
contarán con una aplicación disponible para Móvil Android o iOS, o wearable la cual, utilizando
Bluetooth o NFC, permitirá que se autentiquen en la máquina en que decidan realizar la maratón. En
caso que exista algún inconveniente y decida cambiar de Treadmill, se enlazará con el otro de los 42
equipos disponibles en el centro y continuará en la Maratón.
Cada Technogym Run cuenta con conectividad WiFi (ver especificaciones en
https://www.technogym.com/en-US/product/technogym-run_DGK0.html#specifications-table), lo
cual permitirá el envío de información a un Edge Gateway que contendrá una Edge Application
elaborada con Unity SDK, la cual estará enlazada con las tres pantallas gigantes para la presentación
del ranking local de participantes en tiempo real y gráficos analíticos de desempeño. La información
de ranking de los 7 ganadores (7 mejores records) de cada Indoor Marathon Center, será enviada
por la Edge Application hacia una base de datos Cloud FireStore de Google, la cual servirá de fuente
de datos para el Website Oficial del concurso, elaborado con Angular y publicado en Firebase
Hosting, donde se publicarán los rankings generales a nivel de todos los Marathon Centers.
Adicionalmente, TechnoGym desea que el Edge Gateway centralice la información periódica (cada
20 segundos) de health check de cada uno de los 42 Treadmills (incluyendo en cada envío individual
el id del equipo, timestamp, voltaje en voltios, potencia de consumo en Watts, Horse Power,
temperatura en grados Centígrados, tiempo de uso acumulado desde el inicio del evento). Al cierre
del evento, estos datos serán consolidados en mywellness para ser analizados posteriormente por el
equipo técnico de TechnoGym. Para tal fin, cada equipo Technogym Run contará con una aplicación
elaborada en Unity SDK que recolectará esa información y la enviará al Edge Gateway.
Como beneficio adicional, los deportistas que deseen, podrán conectar su dispositivo compatible
con Apple GymKit para que se sincronice los datos (https://support.apple.com/guide/watch/use-
Página 3 de 5
gym-equipment-with-apple-watch-apdf855bb3c0/watchos) que recolecta el Technogym Run que
esté utilizando. La información de los manuales de producto de los equipos de TechnoGym se
encuentran en https://support.technogym.com/product-manuals/all1.
Para ello, su equipo se encuentra desarrollando para TechnoGym, una plataforma de backend para
presentar a ganadores y records del Indoor Marathon, sin embargo, desea ir iniciando con el
desarrollo del website de presentación de resultados.
La evaluación tiene un empaquetado adjunto conteniendo dos archivos: db.json y routes.json, los
cuales pueden ser usados por json-server (https://www.npmjs.com/package/json-server) para
simular un backend con las características indicadas.
Al ejecutar json-server en el terminal, utilizando los archivos de configuración mencionados (debe
ubicar los archivos en la carpeta server de su proyecto), con los comandos:
cd server
json-server --watch db.json --routes routes.json
Esto inicia el Fake API.
La información de los Participants en general (id, firstName, lastName, photoUrl, centerId, ranking,
recordTime) se encuentra en el endpoint:
http://localhost:3000/api/v1/participants
La información de los Marathon Centers (id, name) se encuentra en el endpoint:
http://localhost:3000/api/v1/centers
La información de los Participants con mejores tiempos en un Marathon Center específico se puede
encontrar en el endpoint:
http://localhost:3000/api/v1/centers/:centerId/participants
Para el desarrollo web de lado web frontend, se ha seleccionado TypeScript como lenguaje de
programación y Angular como Frontend Framework.
Se le encarga el desarrollo de una aplicación web que implemente las siguientes características:
• Un toolbar, donde a la izquierda se muestra el branding Technogym Indoor Marathon y a la
derecha se muestra las opciones “Home” y “Records”.
• La vista Home muestra un card con título “Marathon Winner”, incluyendo photo (la ruta de
la imagen para cada participant está disponible en photoUrl), first name, last name, record
time (en formato hh:mm:ss), marathon center name, para el participant con mejor tiempo
de entre todos los Marathon Centers (el cual tiene valor de ranking 1).
• La vista Records presenta una vista de tabla de solo lectura (es decir que no se requiere
soporte de adición, modificación o eliminación de registros) con la información de los
participantes con mejor record time en cada Marathon Center. En cada fila debe apreciarse
el participant id, first name, last name, marathon center name, ranking y record time (en
1 Para efectos de la evaluación, de requerirse tome como referencia la información técnica en el manual del
equipo Technogym MyRun.
Página 4 de 5
formato hh:mm:ss). Debe presentarse solo una tabla con toda la información solicitada, no
una tabla por cada center. La tabla debe ofrecer pagination, sorting y filtering.
• Considere una vista de tipo page-not-found para el caso de rutas de navegación no
soportadas. Dicha vista debe mostrar un mensaje incluyendo la ruta especificada que no se
encontró y debe ofrecer un botón para retornar a Home.
• La vista Home es accesible desde la ruta de navegación /home.
• La vista Records es accesible desde la ruta de navegación /marathon/records.
• La vista raíz (accesible desde la ruta de navegación /) debe redirigir al usuario a la vista
/home.
El equipo de IT de su cliente tomará en cuenta no sólo el cumplimiento de las características
funcionales, sino el diseño de interfaz de usuario, así como la estructura del proyecto, aplicación de
convenciones de nomenclatura de objetos de programación en inglés, convenciones de
nomenclatura de Angular, organización y eficiencia del código. Igualmente se tomará en cuenta la
aplicación de patrones de diseño. Se toma en cuenta accessibility (uso de ARIA attributes) y usability.
Restricciones técnicas:
Nombre su proyecto como upc2301si729eaucode donde code es su código de estudiante en
minúsculas.
El equipo requiere que la interfaz de usuario esté basada en Angular Material, mientras que para la
comunicación con el backend debe apoyarse en HttpClient (incluido en @angular/common/http). La
aplicación debe soportar in-app navigation y utilizar @angular/router para el manejo de routing en
la aplicación. Debe incluir ARIA atributes en las vistas. La interfaz de usuario debe mostrar los textos
en inglés. El proyecto de aplicación debe poder aperturarse sin problemas en JetBrains WebStorm.
La organización del proyecto debe ser domain-driven, considerando los sub-dominios public (para
elementos o componentes generales de la interfaz de usuario, como home), shared (para elementos
base o de uso común en otros sub-dominios) y marathon (para componentes o elementos
relacionados con el marathon, como participants o centers). Aplique buenas prácticas para
nomenclatura lógica y física de clases y componentes. Distribuya adecuadamente los elementos
dentro de cada carpeta de sub-dominio, considerando carpetas como pages, components, services,
model. En pages solo se ubican componentes que tienen relación directa con rutas de navegación.
En components se ubican componentes que son incluidos en otros y no están asociados de forma
directa a rutas de navegación
