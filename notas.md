Strapi 
CMS headless - similar a wordpress sin plantillas ni bloques, solo contenido.
Se puede crear APIs con respuestas JSON o GrapgQL
Codigo con JS o TypeScript
Se puede extender la funcionalidad con plugins

Node 16 o superior.
Base de datos compatibles
- SQLite 3
- PostgreSQL +10
- Mysql 5.7.8 o +
- MariaDB 10.2.7 +

SITIO
https://strapi.io/
Comando
npx create-strapi-app@latest my-project

Tenia node 19 y maximo compatible es 18
Determining your Node version
node -v  // or node --version
npm -v   // npm version or long npm --version
Ensure that you have n installed
sudo npm install -g n // -g for global installation 
Upgrading to the latest stable version
sudo n stable
Changing to a specific version
sudo n 10.16.0

Web con Base de datos para instalarla local
https://render.com/


key external
postgres://root:d6spbkWGOopdZKnis1uds9bjwEPMGtPA@dpg-ceu8nbkgqg40d6h71fpg-a.oregon-postgres.render.com/guitarla_p1jk

user: root
pass: d6spbkWGOopdZKnis1uds9bjwEPMGtPA
url_host: dpg-ceu8nbkgqg40d6h71fpg-a.oregon-postgres.render.com
database: guitarla_p1jk
port: 5432
ssl_conection: y


Dentro del proyemcto
npm run develop


https://www.npmjs.com/package/@strapi/provider-upload-cloudinary
npm install @strapi/provider-upload-cloudinary --save

en cloudinary, media library, hay imagenes por default, habiendo configurado pugins.js y middlwares.js con los permisos necesarios y desde el content-type builder de strapi, se crea un campo del tipo media (simple media en este caso)
