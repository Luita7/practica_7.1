FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./
COPY yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto que configuramos en app.js
EXPOSE 8085

# Comando para arrancar la aplicación
CMD [ "node", "app.js" ]
