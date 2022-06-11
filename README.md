# sw2  
# Integrantes
Andrés Iturria  
José Manuel Martinez  
Jaime Gisbert  
Cristina Abdul-Massih  


## Instrucciones

- Crear en la carpeta root del proyecto un fichero .env con el contenido: API_KEY="api_key de weatherapi".
- Para validar XML se usa una libreria que depende de Java, tiene que estar Java instalado y la variable de entorno
JAVA_HOME tiene que estar configurada en el equipo.
- Recrear la base de datos:  
  - Primero iniciar la aplicación y hacer un get de las 5 rutas, esto hace que se cree la base de datos y 
las colecciones con las restricciones.
  - Para añadir los datos iniciales se proveen ficheros csv en la carpeta db.
    - Se recomienda importarlos usando MongoDB Compass y fijarse cuando se importen que los tipos de datos
  son los correctos (los que aparecen en los respectivos schemas).
    - Fijarse especialmente en que los Ids son Number.
